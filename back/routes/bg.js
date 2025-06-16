const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const { updateAnalytics } = require('./analytics.js');

const BG_DIR = path.join(__dirname, '..', 'bg');

class FusionBrainAPI {
  constructor(apiKey, secretKey) {
    this.baseURL = 'https://api-key.fusionbrain.ai/';
    this.headers = {
      'X-Key': `Key ${apiKey}`,
      'X-Secret': `Secret ${secretKey}`,
    };
  }

  async getPipelines() {
    const res = await axios.get(`${this.baseURL}key/api/v1/pipelines`, { headers: this.headers });
    return res.data;
  }

  async generate(pipelineId, prompt, options = {}) {
    const form = new FormData();
    const params = {
      type: "GENERATE",
      numImages: 1,
      width: options.width || 1024,
      height: options.height || 1024,
      generateParams: { query: prompt }
    };
    if (options.style) params.style = options.style;
    if (options.negative) params.negativePromptDecoder = options.negative;
    form.append('pipeline_id', pipelineId);
    form.append('params', JSON.stringify(params), { contentType: 'application/json' });

    const res = await axios.post(`${this.baseURL}key/api/v1/pipeline/run`, form, {
      headers: { ...this.headers, ...form.getHeaders() }
    });
    return res.data;
  }

  async checkStatus(uuid) {
    const res = await axios.get(`${this.baseURL}key/api/v1/pipeline/status/${uuid}`, { headers: this.headers });
    return res.data;
  }
}

const fusionAPI = new FusionBrainAPI(
  process.env.FUSION_API_KEY,
  process.env.FUSION_SECRET_KEY
);

module.exports = async function (fastify) {
  // Получить фон
  fastify.get('/bg/:page', async (req, reply) => {
    const { page } = req.params;
    const filePath = path.join(BG_DIR, `${page}.txt`);
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return { image: data };
    } catch {
      return reply.code(404).send({ error: 'Фон не найден' });
    }
  });

  // Сгенерировать и сохранить фон
  fastify.post('/generate-bg', async (req, reply) => {
    const { prompt, page } = req.body;
    if (!prompt || !page) {
      return reply.code(400).send({ error: 'prompt и page обязательны' });
    }
    try {
      const pipelines = await fusionAPI.getPipelines();
      let selectedPipeline = pipelines.find(
        p => p.status === 'ACTIVE' && p.type === 'TEXT2IMAGE'
      );
      if (!selectedPipeline) throw new Error('Нет доступных моделей');
      const generation = await fusionAPI.generate(selectedPipeline.id, prompt, {
        style: 'DEFAULT',
        width: 1024,
        height: 1024
      });
      if (!generation.uuid) throw new Error('Не получен UUID задачи');
      await new Promise(resolve => setTimeout(resolve, 15000));
      let image = null;
      for (let i = 0; i < 30; i++) {
        const status = await fusionAPI.checkStatus(generation.uuid);
        if (status.status === 'DONE') {
          if (status.censored) throw new Error('Изображение заблокировано модерацией');
          if (status.result && status.result.files && status.result.files[0]) {
            image = status.result.files[0];
            break;
          }
        }
        if (status.status === 'FAIL') throw new Error('Генерация завершилась с ошибкой');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
      if (!image) throw new Error('Не удалось получить изображение');
      const filePath = path.join(BG_DIR, `${page}.txt`);
      await fs.writeFile(filePath, image, 'utf8');
      await updateAnalytics({ page, ip: req.ip, prompt });
      return { image };
    } catch (error) {
      return reply.code(500).send({ error: error.message });
    }
  });
}; 
 