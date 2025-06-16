
import { motion } from "framer-motion";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
);

const divider = (
  <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full my-6" />
);

export default function ProjectVisualizationSection() {
  // 7.1 Бюджет и ресурсы
  const budgetPieData = {
    labels: [
      "Backend разработка",
      "Frontend разработка",
      "ML-модуль",
      "Серверное оборудование",
      "Лицензии ПО",
      "Сетевая инфраструктура",
      "Зарплата команды",
      "Обучение и сертификация",
      "Тестирование и QA",
      "Управление проектом",
    ],
    datasets: [
      {
        data: [2.1, 1.2, 0.9, 1.2, 0.4, 0.2, 1.4, 0.3, 0.5, 0.3],
        backgroundColor: [
          "#00897b", "#26a69a", "#43a047", "#ffb300", "#ffd54f",
          "#90caf9", "#6d4c41", "#bdbdbd", "#e57373", "#f06292"
        ],
      },
    ],
  };
  const budgetPieOptions = {
    plugins: {
      legend: { position: "bottom" as const },
      title: { display: false },
    },
  };

  const stageBarData = {
    labels: [
      "Инициация (Янв 2025)",
      "Планирование (Фев-Мар 2025)",
      "Реализация (Мар-Дек 2025)",
      "Мониторинг (параллельно)",
      "Завершение (Янв-Мар 2026)",
    ],
    datasets: [
      {
        label: "Затраты (млн руб.)",
        data: [0.5, 0.8, 6.5, 0.4, 0.3],
        backgroundColor: "#00897b",
      },
    ],
  };
  const stageBarOptions = {
    indexAxis: "y" as const,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { beginAtZero: true },
    },
  };

  // 7.2 Гантт и загрузка команды
  const ganttBarData = {
    labels: [
      "Инициация",
      "Планирование",
      "Реализация MVP",
      "ML-разработка",
      "Интеграции",
      "Тестирование",
      "Внедрение",
      "Завершение",
    ],
    datasets: [
      {
        label: "2025 Янв-Мар",
        data: [3, 2, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#00897b",
        stack: "2025"
      },
      {
        label: "2025 Апр-Авг",
        data: [0, 3, 4, 2, 1, 0, 0, 0],
        backgroundColor: "#26a69a",
        stack: "2025"
      },
      {
        label: "2025 Сен-Дек",
        data: [0, 0, 4, 3, 3, 2, 1, 0],
        backgroundColor: "#43a047",
        stack: "2025"
      },
      {
        label: "2026 Янв-Мар",
        data: [0, 0, 0, 0, 0, 2, 3, 4],
        backgroundColor: "#ffb300",
        stack: "2026"
      },
    ],
  };
  const ganttBarOptions = {
    indexAxis: "y" as const,
    plugins: {
      legend: { position: "bottom" as const },
      title: { display: false },
    },
    scales: {
      x: { stacked: true, beginAtZero: true },
      y: { stacked: true },
    },
  };

  const teamLoadData = {
    labels: [
      "Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д", "Я", "Ф", "М"
    ],
    datasets: [
      {
        label: "Разработчики",
        data: [2, 4, 6, 8, 10, 12, 12, 10, 8, 6, 4, 2, 2, 2, 2],
        backgroundColor: "#00897b",
        borderColor: "#00897b",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const teamLoadOptions = {
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true, max: 12 },
    },
  };

  // 7.3 Приоритеты и покрытие
  const priorityBarData = {
    labels: [
      "Управление сотрудниками",
      "Расчет зарплаты",
      "Базовая отчетность",
      "ML-прогнозирование",
      "GPS-мониторинг",
      "Мобильное приложение",
      "Расширенная аналитика",
      "API для интеграций",
      "Система уведомлений",
    ],
    datasets: [
      {
        label: "Важность (%)",
        data: [100, 100, 100, 85, 70, 60, 40, 55, 35],
        backgroundColor: [
          "#00897b", "#00897b", "#00897b", "#43a047", "#43a047", "#43a047", "#ffb300", "#ffb300", "#e57373"
        ],
      },
    ],
  };
  const priorityBarOptions = {
    indexAxis: "y" as const,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { beginAtZero: true, max: 100 },
    },
  };

  const coverageBarData = {
    labels: [
      "HR Management",
      "ML Analytics Module",
      "Integration Layer",
      "Mobile Application",
      "Security Module",
    ],
    datasets: [
      {
        label: "Покрытие (%)",
        data: [95, 87, 78, 65, 92],
        backgroundColor: [
          "#00897b", "#43a047", "#ffb300", "#90caf9", "#6d4c41"
        ],
      },
    ],
  };
  const coverageBarOptions = {
    indexAxis: "y" as const,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { beginAtZero: true, max: 100 },
    },
  };

  // 7.4 ROI и метрики
  const roiLineData = {
    labels: ["0", "1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "ROI, %",
        data: [-100, 15, 78, 125, 167, 210],
        borderColor: "#ff9800",
        backgroundColor: "#ffe0b2",
        tension: 0.4,
        fill: true,
      },
    ],
  };
  const roiLineOptions = {
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: false },
    },
  };

  const perfMetrics = [
    { name: "Web интерфейс", value: 450, target: 500, unit: "ms" },
    { name: "API запросы", value: 120, target: 200, unit: "ms" },
    { name: "ML предсказания", value: 2300, target: 3000, unit: "ms" },
    { name: "Отчеты", value: 1800, target: 2000, unit: "ms" },
    { name: "Доступность системы", value: 99.7, target: 99.5, unit: "%" },
    { name: "Пропускная способность", value: 1200, target: 1000, unit: "req/sec" },
    { name: "Concurrent users", value: 650, target: 600, unit: "пик" },
  ];

  // 7.5 Пользовательская аналитика
  const rolesPieData = {
    labels: [
      "Сотрудники",
      "HR-менеджеры",
      "Руководители",
      "Администраторы",
      "Агрономы",
      "Финансисты",
    ],
    datasets: [
      {
        data: [420, 24, 60, 12, 48, 36],
        backgroundColor: [
          "#00897b", "#43a047", "#ffb300", "#6d4c41", "#90caf9", "#e57373"
        ],
      },
    ],
  };
  const rolesPieOptions = {
    plugins: {
      legend: { position: "bottom" as const },
      title: { display: false },
    },
  };

  const userGrowthData = {
    labels: ["2025", "2026", "2027", "2028", "2029"],
    datasets: [
      {
        label: "Пользователи (чел.)",
        data: [600, 900, 1300, 1700, 2100],
        borderColor: "#00897b",
        backgroundColor: "#b2dfdb",
        tension: 0.4,
        fill: true,
      },
    ],
  };
  const userGrowthOptions = {
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  const heatMapData = [
    { label: "Просмотр личных данных", value: 10 },
    { label: "Подача заявлений", value: 8 },
    { label: "Расчет зарплаты", value: 10 },
    { label: "Отчеты по персоналу", value: 6 },
    { label: "ML-прогнозы", value: 5 },
    { label: "GPS-мониторинг", value: 3 },
    { label: "Управление доступом", value: 1 },
    { label: "Интеграция с банками", value: 10 },
    { label: "Мобильное приложение", value: 8 },
    { label: "Система уведомлений", value: 6 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-2">Визуализация данных проекта</h2>
      {divider}

      {/* 7.1 Бюджет и ресурсы */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Бюджет и ресурсы</h3>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Распределение бюджета проекта</div>
          <Pie data={budgetPieData} options={budgetPieOptions} />
        </div>
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Затраты по этапам проекта</div>
          <div style={{height: 220}}>
            <Bar data={stageBarData} options={stageBarOptions} />
          </div>
        </div>
      </div>

      {/* 7.2 Временные характеристики */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Временные характеристики</h3>
      <div className="mb-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Диаграмма Гантта проекта</div>
          <div style={{height: 320}}>
            <Bar data={ganttBarData} options={ganttBarOptions} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">График загрузки команды по месяцам</div>
          <div style={{height: 220}}>
            <Line data={teamLoadData} options={teamLoadOptions} />
          </div>
        </div>
      </div>

      {/* 7.3 Функциональность системы */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Функциональность системы</h3>
      <div className="mb-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Диаграмма приоритетности функций</div>
          <div style={{height: 320}}>
            <Bar data={priorityBarData} options={priorityBarOptions} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">График покрытия требований по модулям</div>
          <div style={{height: 220}}>
            <Bar data={coverageBarData} options={coverageBarOptions} />
          </div>
        </div>
      </div>

      {/* 7.4 Аналитика эффективности */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Аналитика эффективности</h3>
      <div className="mb-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">График ROI по годам</div>
          <div style={{height: 220}}>
            <Line data={roiLineData} options={roiLineOptions} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Метрики производительности системы</div>
          <table className="w-full text-sm mt-2">
            <thead>
              <tr className="bg-teal-50">
                <th className="p-2 text-left">Метрика</th>
                <th className="p-2 text-left">Значение</th>
                <th className="p-2 text-left">Цель</th>
                <th className="p-2 text-left">Статус</th>
              </tr>
            </thead>
            <tbody>
              {perfMetrics.map((m) => (
                <tr key={m.name}>
                  <td className="p-2 border-b border-gray-100">{m.name}</td>
                  <td className="p-2 border-b border-gray-100">{m.value} {m.unit}</td>
                  <td className="p-2 border-b border-gray-100">{m.target} {m.unit}</td>
                  <td className="p-2 border-b border-gray-100">
                    {m.value <= m.target || m.name === "Доступность системы" || m.value > m.target ? (
                      <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-semibold">✅</span>
                    ) : (
                      <span className="inline-block px-2 py-1 rounded bg-red-100 text-red-800 text-xs font-semibold">⚠️</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 7.5 Пользовательская аналитика */}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Пользовательская аналитика</h3>
      <div className="mb-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Распределение пользователей по ролям</div>
          <Pie data={rolesPieData} options={rolesPieOptions} />
        </div>
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Прогноз роста пользовательской базы</div>
          <div style={{height: 220}}>
            <Line data={userGrowthData} options={userGrowthOptions} />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-2">Карта использования функций (Heat Map)</div>
          <table className="w-full text-sm mt-2">
            <thead>
              <tr className="bg-teal-50">
                <th className="p-2 text-left">Функция</th>
                <th className="p-2 text-left">Частота</th>
              </tr>
            </thead>
            <tbody>
              {heatMapData.map((row) => (
                <tr key={row.label}>
                  <td className="p-2 border-b border-gray-100">{row.label}</td>
                  <td className="p-2 border-b border-gray-100">
                    <div className="inline-block align-middle bg-teal-100 rounded h-4" style={{width: `${row.value * 10}%`, minWidth: 24}} />
                    <span className="ml-2 font-semibold">{row.value * 10}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
} 