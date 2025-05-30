const fs = require('fs').promises;
const path = require('path');

const BG_DIR = path.join(__dirname, '..', 'bg');
const ANALYTICS_FILE = path.join(BG_DIR, 'analytics.json');
if (!require('fs').existsSync(BG_DIR)) {
  require('fs').mkdirSync(BG_DIR);
}

async function updateAnalytics({ page, ip, prompt }) {
  let analytics = { generations: {}, users: {}, prompts: {}, registrations: 0 };
  try {
    const raw = await fs.readFile(ANALYTICS_FILE, 'utf8');
    analytics = JSON.parse(raw);
  } catch {}
  analytics.generations[page] = (analytics.generations[page] || 0) + 1;
  analytics.users[ip] = (analytics.users[ip] || 0) + 1;
  if (prompt) {
    analytics.prompts[prompt] = (analytics.prompts[prompt] || 0) + 1;
  }
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(analytics, null, 2), 'utf8');
}

async function incrementRegistrations() {
  let analytics = { generations: {}, users: {}, prompts: {}, registrations: 0 };
  try {
    const raw = await fs.readFile(ANALYTICS_FILE, 'utf8');
    analytics = JSON.parse(raw);
  } catch {}
  analytics.registrations = (analytics.registrations || 0) + 1;
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(analytics, null, 2), 'utf8');
}

async function getAnalytics() {
  try {
    const raw = await fs.readFile(ANALYTICS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { generations: {}, users: {}, prompts: {}, registrations: 0 };
  }
}

async function registerAnalyticsRoutes(fastify) {
  fastify.get('/analytics', async (req, reply) => {
    return await getAnalytics();
  });
}

module.exports = {
  updateAnalytics,
  incrementRegistrations,
  getAnalytics,
  registerAnalyticsRoutes
}; 