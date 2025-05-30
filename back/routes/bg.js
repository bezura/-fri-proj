const { FusionBrain } = require("fusionbrain-api");

// В памяти, для MVP. Для продакшна — заменить на БД или файловое хранилище
const bgStore = {};

module.exports = async function (fastify) {
  // Генерация и сохранение фона
  fastify.post("/generate-bg", async (req, reply) => {
    const { prompt, page } = req.body;
    if (!prompt || !page) {
      return reply.code(400).send({ error: "prompt и page обязательны" });
    }
    try {
      const fb = new FusionBrain(process.env.FUSION_API_KEY, process.env.FUSION_SECRET_KEY);
      const models = await fb.getModels();
      const modelId = models[0].id;
      const generation = await fb.generate(modelId, prompt);
      if (generation.accepted && generation.task) {
        let task = generation.task;
        // Ожидание завершения генерации
        while (true) {
          task = await fb.checkTask(task.uuid);
          if (task.isSuccess()) {
            bgStore[page] = task.images[0]; // base64
            return { image: task.images[0] };
          }
          await new Promise(r => setTimeout(r, 3000));
        }
      } else {
        return reply.code(400).send({ error: generation.reason || "Ошибка генерации" });
      }
    } catch (e) {
      return reply.code(500).send({ error: e.message || "Ошибка генерации" });
    }
  });

  // Получение текущего фона для страницы
  fastify.get("/bg/:page", async (req, reply) => {
    const { page } = req.params;
    if (bgStore[page]) {
      return { image: bgStore[page] };
    } else {
      return reply.code(404).send({ error: "Фон не найден" });
    }
  });
}; 
