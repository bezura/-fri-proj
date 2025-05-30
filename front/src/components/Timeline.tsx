import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const timelineItems = [
  {
    title: "Инициализация проекта",
    date: "Январь 2025 г. – Февраль 2025 г.",
    points: [
      "Определение требований к системе (HR-функционал, учет сотрудников, ML-модель)",
      "Формирование команды разработки",
      "Определение технологического стека (Python, Django, PostgreSQL, React, TensorFlow)",
      "Создание продающего сайта агрокомплекса",
      "Оценка бюджета и определение ключевых KPI",
    ],
    side: "left",
  },
  {
    title: "Планирование проекта",
    date: "Февраль 2025 г. – Март 2025 г.",
    points: [
      "Разработка архитектуры системы",
      "Создание UML-диаграмм основных модулей",
      "Определение интеграций (CRM, API банков для выплат зарплат, GPS-мониторинг полей)",
      "Проектирование базы данных и алгоритмов ML-модели",
      "Определение этапов тестирования и контроля качества",
      "Планирование работы команд (frontend, backend, ML, DevOps)",
    ],
    side: "right",
  },
  {
    title: "Исполнение и координация действий",
    date: "Март 2025 г. – Декабрь 2025 г.",
    points: [
      "Март – Апрель: Разработка MVP внутренней системы (базовый функционал учета сотрудников)",
      "Май – Август: Реализация ML-модуля для автоматизации сбора урожая. Разработка аналитики производительности сотрудников",
      "Сентябрь – Октябрь: Тестирование системы и устранение ошибок",
      "Ноябрь – Декабрь: Интеграция системы в агрокомплекс и обучение сотрудников",
    ],
    side: "left",
  },
  {
    title: "Контроль и оценка проекта",
    date: "Январь 2026 г. – Февраль 2026 г.",
    points: [
      "Мониторинг отзывов сотрудников об удобстве системы",
      "Анализ посещаемости продающего сайта",
      "Оценка точности предсказаний ML-модели",
      "Производительность системы (нагрузочное тестирование)",
    ],
    side: "right",
  },
  {
    title: "Завершение проекта и оценка эффективности",
    date: "Март 2026 г.",
    points: [
      "Визуализация диаграмм пользователей (график роста пользователей системы)",
      "Проведение финального SWOT-анализа",
      "Подготовка отчета о рентабельности системы",
    ],
    side: "left",
  },
];

const Timeline = () => {
  return (
    <section className="mb-20 px-4 max-w-4xl mx-auto">
      <div className="relative mb-12">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-orange-500"
        />
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-teal-100 p-2 rounded-lg">
            <Clock className="h-6 w-6 text-teal-700" />
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-bold text-teal-700"
          >
            Этапы
          </motion.h1>
        </div>
      </div>
      <div className="relative">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal-500 via-teal-600 to-orange-500 h-full rounded-full hidden md:block"
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-teal-500 via-teal-600 to-orange-500 h-full rounded-full md:hidden"
        />
        <div className="relative z-10">
          {timelineItems.map((item, idx) => {
            const isLeft = item.side === "left";
            const Icon = Calendar;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                className={`mb-12 md:w-1/2 relative ${
                  isLeft
                    ? "md:left-0 md:pr-12 md:text-right"
                    : "md:left-1/2 md:pl-12 md:text-left"
                } pl-16 md:pl-0`}
              >
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative ${
                    isLeft ? "md:mr-0" : "md:ml-0"
                  } hover:shadow-md transition-shadow duration-300`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.2 }}
                    className={`absolute top-6 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${
                      idx % 2 === 0
                        ? "from-teal-500 to-teal-700"
                        : "from-orange-400 to-orange-600"
                    } text-white shadow-md ${
                      isLeft ? "md:-right-5" : "md:-left-5"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.2 }}
                    className={`absolute top-6 left-4 md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${
                      idx % 2 === 0
                        ? "from-teal-500 to-teal-700"
                        : "from-orange-400 to-orange-600"
                    } text-white shadow-md -translate-x-full`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <div className="md:text-left">
                    <h3 className="font-sans text-xl font-semibold text-teal-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-orange-600 font-medium mb-4 flex items-center gap-2">
                      <Calendar className="h-4 w-4 inline md:hidden" />
                      {item.date}
                    </p>
                    <ul className="list-none space-y-2 text-gray-700">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-500 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 