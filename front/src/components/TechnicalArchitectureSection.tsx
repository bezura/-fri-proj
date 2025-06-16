
import { motion } from "framer-motion";
import Diagram from "@/components/Diagram";
import { techArchMicroservicesDiagram, techArchSystemDiagram } from "@/mermaid";

const divider = (
  <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full my-6" />
);

// const asciiMicroservices = `
// ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
// │   HR Service   │    │   ML Service   │    │  Integration    │
// │                 │    │                 │    │   Service       │
// │ - Employee Mgmt │    │ - Prediction    │    │ - Banking API   │
// │ - Payroll       │    │ - Model Training│    │ - GPS Tracking  │
// │ - Performance   │    │ - Analytics     │    │ - CRM Sync      │
// └─────────────────┘    └─────────────────┘    └─────────────────┘
//          │                       │                       │
//          └───────────────────────┼───────────────────────┘
//                                  │
//                     ┌─────────────────┐
//                     │  API Gateway    │
//                     │                 │
//                     │ - Authentication│
//                     │ - Rate Limiting │
//                     │ - Load Balancing│
//                     └─────────────────┘
// `;

// const asciiSystemArch = `
// ┌─────────────────────────────────────────────────────────────┐
// │                     Load Balancer                           │
// └─────────────────────┬───────────────────────────────────────┘
//                       │
// ┌─────────────────────┼───────────────────────────────────────┐
// │                     │           API Gateway                 │
// │  ┌─────────────────┬┴─────────────────┬───────────────────┐ │
// │  │  Authentication │   Rate Limiting  │  Request Routing  │ │
// │  └─────────────────┴──────────────────┴───────────────────┘ │
// └─────────────────────┬───────────────────────────────────────┘
//                       │
//         ┌─────────────┼─────────────┬─────────────────────┐
//         │             │             │                     │
// ┌───────▼──────┐ ┌────▼─────┐ ┌─────▼──────┐ ┌──────────▼──────┐
// │ HR Service   │ │ML Service│ │Integration │ │ Notification    │
// │              │ │          │ │ Service    │ │ Service         │
// │ - Employees  │ │- Models  │ │- Bank APIs │ │- Email/SMS      │
// │ - Payroll    │ │- Training│ │- GPS Data  │ │- Push Notif.    │
// │ - Reports    │ │- Predict │ │- CRM Sync  │ │- System Alerts  │
// └──────┬───────┘ └────┬─────┘ └─────┬──────┘ └──────────┬──────┘
//        │              │             │                   │
//        └──────────────┼─────────────┼───────────────────┘
//                       │             │
//               ┌───────▼─────────────▼────┐
//               │     Message Queue       │
//               │      (Redis)            │
//               └─────────────────────────┘
//                           │
//               ┌───────────▼─────────────┐
//               │   Database Cluster      │
//               │                         │
//               │ ┌─────────┐ ┌─────────┐ │
//               │ │ Master  │ │ Replica │ │
//               │ │   DB    │ │   DB    │ │
//               │ └─────────┘ └─────────┘ │
//               └─────────────────────────┘
// `;

const infraTable = [
  {
    title: "Application Servers (3 экземпляра)",
    specs: [
      "CPU: 8 cores, 2.4 GHz",
      "RAM: 32 GB",
      "Storage: 500 GB SSD",
      "Network: 1 Gbps",
    ],
  },
  {
    title: "Database Server (Master + Replica)",
    specs: [
      "CPU: 16 cores, 2.8 GHz",
      "RAM: 64 GB",
      "Storage: 2 TB NVMe SSD",
      "Network: 10 Gbps",
      "Backup: 10 TB для резервных копий",
    ],
  },
  {
    title: "ML Server",
    specs: [
      "CPU: 12 cores, 3.0 GHz",
      "GPU: NVIDIA Tesla T4 или аналог",
      "RAM: 128 GB",
      "Storage: 1 TB NVMe SSD",
      "Network: 10 Gbps",
    ],
  },
  {
    title: "Load Balancer",
    specs: [
      "CPU: 4 cores, 2.4 GHz",
      "RAM: 16 GB",
      "Storage: 100 GB SSD",
      "Network: 10 Gbps с резервным каналом",
    ],
  },
];

export default function TechnicalArchitectureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-2">6. Техническая архитектура системы</h2>
      {divider}

      {/* 6.1 Технологический стек */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">6.1) Технологический стек</h3>
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <div className="font-bold text-gray-800 mb-1">Backend (Серверная часть):</div>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><b>Язык программирования:</b> Python 3.11+</li>
            <li><b>Web-фреймворк:</b> Django 4.2 с Django REST Framework</li>
            <li><b>База данных:</b> PostgreSQL 15 с репликацией master-slave</li>
            <li><b>Кэширование:</b> Redis 7.0 для сессий и кэша запросов</li>
            <li><b>Очереди задач:</b> Celery с Redis в качестве брокера</li>
            <li><b>ML-фреймворк:</b> TensorFlow 2.13 для машинного обучения</li>
          </ul>
          <div className="font-bold text-gray-800 mb-1">Frontend (Клиентская часть):</div>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><b>Основной фреймворк:</b> React 18 с TypeScript</li>
            <li><b>State Management:</b> Redux Toolkit для управления состоянием</li>
            <li><b>UI библиотека:</b> Material-UI (MUI) для консистентного дизайна</li>
            <li><b>Графики и визуализация:</b> Chart.js и D3.js для аналитики</li>
            <li><b>Карты:</b> Leaflet для GPS-визуализации полей</li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-800 mb-1">Mobile приложение:</div>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><b>Фреймворк:</b> React Native для iOS и Android</li>
            <li><b>Навигация:</b> React Navigation 6</li>
            <li><b>State Management:</b> Redux Toolkit (общий с web)</li>
            <li><b>Push-уведомления:</b> Firebase Cloud Messaging</li>
          </ul>
          <div className="font-bold text-gray-800 mb-1">DevOps и инфраструктура:</div>
          <ul className="list-disc pl-6 text-gray-700">
            <li><b>Контейнеризация:</b> Docker и Docker Compose</li>
            <li><b>Оркестрация:</b> Kubernetes для продакшена</li>
            <li><b>CI/CD:</b> GitLab CI/CD с автоматическими тестами</li>
            <li><b>Мониторинг:</b> Prometheus + Grafana</li>
            <li><b>Логирование:</b> ELK Stack (Elasticsearch, Logstash, Kibana)</li>
            <li><b>Файловое хранилище:</b> MinIO (S3-совместимое)</li>
          </ul>
        </div>
      </div>

      {/* 6.2 Архитектурные решения и обоснование */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">6.2) Архитектурные решения и обоснование</h3>
      <div className="mb-4">
        <div className="font-bold text-gray-800 mb-1">Микросервисная архитектура:</div>
        <Diagram
          name="Микросервисная архитектура системы"
          description="Визуализация основных сервисов (HR, ML, интеграционный), их функций и взаимодействия через API Gateway."
          mermaidCode={techArchMicroservicesDiagram}
        />
        <div className="font-bold text-gray-800 mb-1">Обоснование выбора технологий:</div>
        <ul className="list-disc pl-6 text-gray-700">
          <li><b>Python/Django:</b> Быстрая разработка, богатая экосистема для ML, хорошая поддержка PostgreSQL</li>
          <li><b>PostgreSQL:</b> ACID-совместимость, поддержка JSON, расширения для геоданных (PostGIS)</li>
          <li><b>React:</b> Компонентный подход, большое сообщество, переиспользование кода с React Native</li>
          <li><b>TensorFlow:</b> Лидер в области ML, хорошая поддержка продакшен-деплоя, TensorFlow Serving</li>
          <li><b>Kubernetes:</b> Масштабируемость, высокая доступность, простота управления микросервисами</li>
        </ul>
      </div>

      {/* 6.3 Схема взаимодействия компонентов */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">6.3) Схема взаимодействия компонентов</h3>
      <div className="mb-4">
        <Diagram
          name="Схема взаимодействия компонентов"
          description="Общая архитектура системы: балансировщик, API Gateway, сервисы, очередь сообщений и кластер баз данных."
          mermaidCode={techArchSystemDiagram}
        />
      </div>

      {/* 6.4 Требования к инфраструктуре */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">6.4) Требования к инфраструктуре</h3>
      <div className="mb-4">
        <div className="grid md:grid-cols-2 gap-6">
          {infraTable.map((srv) => (
            <div key={srv.title} className="bg-white rounded-xl shadow border border-teal-100 p-4 mb-2">
              <div className="font-bold text-teal-700 mb-1">{srv.title}</div>
              <ul className="list-disc pl-6 text-gray-700">
                {srv.specs.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="font-bold text-gray-800 mb-1">Дополнительные требования:</div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Источник бесперебойного питания (UPS) на 2 часа</li>
            <li>Система кондиционирования серверной</li>
            <li>Каналы связи с резервированием</li>
            <li>Система мониторинга и алертинга 24/7</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
} 