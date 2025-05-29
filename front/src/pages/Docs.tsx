import { motion } from "framer-motion";

import {
  Target,
  FileText,
  BarChart2,
  Package,
  DollarSign,
  Megaphone,
  Calendar,
  MapPin,
  Users,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import React from "react";
import Table, { type TableRowData } from "@/components/Table";
import Diagrams from "@/components/Diagrams";
import Diagram from "@/components/Diagram";
import {
  activityMermaidDiagram,
  classMermaidDiagram,
  ComponentMermaidDiagram,
  deploymentDiagram,
  packageMermaidDiagram,
  sequenceMermaidDiagram,
  stateMermaidDiagram,
  temporaryMermaidDiagram,
  useCaseMermaidDiagram,
} from "@/mermaid";
import mermaid from "mermaid";

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

const Header = () => {
  return (
    <header className="relative py-10 px-4 mb-12 overflow-hidden bg-gradient-to-r from-white to-teal-50">

      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative">

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-teal-700 rounded-lg flex items-center justify-center text-white shadow-lg">
              <Users size={40} strokeWidth={1.5} />
            </div>
          </motion.div>


          <div className="flex-grow">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center md:text-left"
            >
              Система управления внутренними ресурсами персонала (HCM) в
              агрокомплексе
            </motion.h1>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center md:justify-start gap-2 text-teal-700"
              >
                <Calendar size={18} />
                <span className="font-medium">04.04.2025</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center md:justify-start gap-2 text-teal-700"
              >
                <MapPin size={18} />
                <span className="font-medium">346 аудитория</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 pt-4 border-t border-teal-200"
            >
              <p className="text-gray-700 font-medium text-center md:text-left">
                Авторы:{" "}
                <span className="text-teal-700">
                  Чесноков Артемий, Хрусталев Влад
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom border with gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-700 to-teal-500"></div>
    </header>
  );
};

const Description = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-16 px-4 max-w-4xl mx-auto"
    >
      {/* Title with decorative elements */}
      <div className="relative mb-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-orange-500"
        />

        <div className="flex items-center gap-3 mb-2">
          <div className="bg-teal-100 p-2 rounded-lg">
            <FileText className="h-6 w-6 text-teal-700" />
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-bold text-teal-700"
          >
            Описание проекта
          </motion.h1>
        </div>
      </div>

      {/* Content with card-like styling */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-full opacity-70 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-50 rounded-full opacity-50" />

        {/* Project goal section */}
        <div className="relative mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Target className="h-5 w-5 text-orange-600" />
            </div>
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-sans text-2xl font-semibold text-teal-700"
            >
              Цель проекта
            </motion.h2>
          </div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-700 leading-relaxed pl-10 border-l-2 border-gray-100"
          >
            Проект представляет собой разработку интегрированной системы
            управления персоналом (HCM) для агрокомплекса. Основная цель —
            оптимизация учета сотрудников, автоматизация бизнес-процессов и
            внедрение машинного обучения (ML) для анализа данных и автоматизации
            сбора урожая.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};
const Timeline = () => {
  return (
    <section className="mb-20 px-4 max-w-4xl mx-auto">
      {/* Title with decorative elements */}
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

      {/* Timeline container */}
      <div className="relative">
        {/* Center line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal-500 via-teal-600 to-orange-500 h-full rounded-full hidden md:block"
        />

        {/* Mobile line (visible only on small screens) */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-teal-500 via-teal-600 to-orange-500 h-full rounded-full md:hidden"
        />

        {/* Timeline items */}
        <div className="relative z-10">
          {timelineItems.map((item, idx) => {
            const isLeft = item.side === "left";
            const Icon =  Calendar;

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
                  {/* Timeline dot - desktop */}
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

                  {/* Timeline dot - mobile */}
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

                  {/* Content */}
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

const SwotTable = () => {
  // SWOT data
  const swotData: TableRowData[] = [
    {
      key: "strengths",
      title: "Сильные стороны (Strengths)",
      items: [
        "Централизованный учет сотрудников снижает бюрократию и ошибки",
        "Автоматизация сбора урожая на основе ML увеличивает эффективность",
        "Интеграция с CRM и банковскими API упрощает процессы",
        "Гибкость системы (модульная архитектура) позволяет масштабироваться",
        "Улучшение аналитики и отчетности",
      ],
      color: "teal",
    },
    {
      key: "weaknesses",
      title: "Слабые стороны (Weaknesses)",
      items: [
        "Высокие первоначальные затраты на разработку и внедрение",
        "Долгий процесс адаптации сотрудников к новой системе",
        "Возможные проблемы с интеграцией с существующими решениями",
        "Требуется техническая поддержка и обучение персонала",
      ],
      color: "orange",
    },
    {
      key: "opportunities",
      title: "Возможности (Opportunities)",
      items: [
        "Внедрение IoT-устройств для улучшения мониторинга полей",
        "Развитие предиктивной аналитики для прогнозирования урожаев",
        "Возможность масштабирования системы на другие агропредприятия",
        "Развитие мобильного приложения для сотрудников",
      ],
      color: "blue",
    },
    {
      key: "threats",
      title: "Угрозы (Threats)",
      items: [
        "Риски кибератак и утечки данных",
        "Сопротивление персонала при переходе на новую систему",
        "Нестабильность экономической ситуации, влияющая на финансирование",
        "Возможные сбои в работе ML-модели и необходимость постоянной доработки",
      ],
      color: "red",
    },
  ];

  return (
    <section className="mb-20 px-4 max-w-4xl mx-auto">
      {/* Title with decorative elements */}
      <div className="relative mb-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-orange-500"
        />

        <div className="flex items-center gap-3 mb-2">
          <div className="bg-teal-100 p-2 rounded-lg">
            <BarChart2 className="h-6 w-6 text-teal-700" />
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-bold text-teal-700"
          >
            SWOT-анализ
          </motion.h1>
        </div>
      </div>

      <Table
        headers={{
          col1: "Фактор",
          col2: "Описание",
        }}
        rows={swotData}
      />
    </section>
  );
};

const FourPTable = () => {
  // 4P analysis data
  const fourPData: TableRowData[] = [
    {
      key: "product",
      title: "Продукт",
      items: [
        "Интегрированная система управления персоналом (HCM)",
        "Автоматизация учета сотрудников, расчета зарплат и мониторинга работы",
        "ML-модель для предсказания сбора урожая и оптимизации ресурсов",
        "Веб-портал для сотрудников и мобильное приложение",
      ],
      color: "teal",
    },
    {
      key: "price",
      title: "Цена",
      items: [
        "Первоначальные затраты на разработку (около 5-10 млн руб.)",
        "Экономия за счет автоматизации (снижение затрат на HR и управленческий персонал)",
        "Стоимость внедрения в другие агрохолдинги (если систему решат продавать)",
      ],
      color: "orange",
    },
    {
      key: "place",
      title: "Место",
      items: [
        "Использование в агрокомплексе для внутреннего управления",
        "Возможность расширения на другие сельхозпредприятия (продажа франшизы или SaaS-модели)",
        "Доступность системы через веб и мобильное приложение",
      ],
      color: "blue",
    },
    {
      key: "promotion",
      title: "Продвижение",
      items: [
        "Внутреннее обучение сотрудников агрокомплекса",
        "Демонстрация эффективности системы через кейсы",
        "Возможность привлечения инвесторов для дальнейшего развития",
        "Маркетинговая кампания (если будет решено продавать систему другим компаниям)",
      ],
      color: "red",
    },
  ];

  return (
    <section className="mb-20 px-4 max-w-4xl mx-auto">
      {/* Title with decorative elements */}
      <div className="relative mb-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-orange-500"
        />

        <div className="flex items-center gap-3 mb-2">
          <div className="bg-teal-100 p-2 rounded-lg">
            <div className="flex space-x-1">
              <Package className="h-5 w-5 text-teal-700" />
              <DollarSign className="h-5 w-5 text-orange-600" />
            </div>
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-bold text-teal-700"
          >
            4P анализ
          </motion.h1>
        </div>
      </div>

      {/* Use the generic Table component */}
      <Table
        headers={{
          col1: "Фактор",
          col2: "Описание",
        }}
        rows={fourPData}
      />

      {/* Legend for the 4P analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 flex flex-wrap gap-4 justify-center text-sm"
      >
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-teal-600" />
          <span className="text-gray-700">Product (Продукт)</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-orange-600" />
          <span className="text-gray-700">Price (Цена)</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span className="text-gray-700">Place (Место)</span>
        </div>
        <div className="flex items-center gap-2">
          <Megaphone className="h-4 w-4 text-red-600" />
          <span className="text-gray-700">Promotion (Продвижение)</span>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="text-center border-t border-gray-300 pt-6 mt-16 text-gray-500 text-sm">
      <p>
        © 2025 Система управления внутренними ресурсами персонала (HCM) в
        агрокомплексе
      </p>
      <p>Чесноков Артемий, Хрусталев Влад</p>
    </footer>
  );
};

export const DocsContent: React.FC = () => {
  const [diagramsLoaded, setDiagramsLoaded] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true, 
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis",
      },
      securityLevel: "sandbox",
      theme: "default",
      themeVariables: {
        width: "100%",
        height: "400px",
      },
      look: "handDrawn",
    });
  }, []);
  useEffect(() => {
    setDiagramsLoaded(true);
  }, []);
  return (
    <div className=" mx-auto p-6 bg-white text-gray-800 font-['Roboto']">
      <Header />
      <Description />
      <Timeline />
      <SwotTable />
      <FourPTable />
      {diagramsLoaded && (
        <Diagrams>
          <Diagram
            name="Диаграмма вариантов использования (Use Case Diagram)"
            description="Диаграмма вариантов использования показывает взаимодействие между
      акторами (пользователями системы) и функциями системы. Она помогает
      определить основные функциональные требования к системе."
            mermaidCode={useCaseMermaidDiagram}
          />
          <Diagram
            name="Временная диаграмма (Sequence Diagram)"
            description="Временная диаграмма показывает последовательность взаимодействий между объектами системы во времени.
     Эта диаграмма иллюстрирует процесс расчета и выплаты заработной платы."
            mermaidCode={temporaryMermaidDiagram}
          />
          <Diagram
            name="Диаграмма компонентов (Component Diagram)"
            description="Диаграмма компонентов показывает организацию и зависимости между компонентами системы.
     Она помогает понять архитектуру системы на высоком уровне."
            mermaidCode={ComponentMermaidDiagram}
          />
          <Diagram
            name="Диаграмма последовательности (Sequence Diagram)"
            description="Диаграмма последовательности показывает поток взаимодействий между объектами системы для выполнения конкретного сценария. 
    Эта диаграмма иллюстрирует процесс авторизации и работы с системой."
            mermaidCode={sequenceMermaidDiagram}
          />
          <Diagram
            name="Диаграмма классов (Class Diagram)"
            description="Диаграмма классов показывает структуру системы, включая классы, их атрибуты, методы и отношения между ними.
     Это ключевая диаграмма для проектирования объектно-ориентированных систем."
            mermaidCode={classMermaidDiagram}
          />
          <Diagram
            name="Диаграмма состояний (State Diagram)"
            description="Диаграмма состояний показывает жизненный цикл объекта и различные состояния, через которые он проходит в ответ на события. 
    Эта диаграмма иллюстрирует состояния сотрудника, задания по сбору урожая, зарплаты и ML-модели."
            mermaidCode={stateMermaidDiagram}
          />
          <Diagram
            name="Диаграмма развертывания (Deployment Diagram)"
            description="Диаграмма развертывания показывает физическую архитектуру системы, включая серверы, устройства и соединения между ними. 
    Эта диаграмма иллюстрирует инфраструктуру HCM-системы агрокомплекса."
            mermaidCode={deploymentDiagram}
          />
          <Diagram
            name="Диаграмма пакетов (Package Diagram)"
            description="Диаграмма пакетов показывает организацию кода на уровне модулей и пакетов, а также зависимости между ними. 
    Эта диаграмма иллюстрирует структуру проекта системы управления персоналом."
            mermaidCode={packageMermaidDiagram}
          />
          <Diagram
            name="Диаграмма активности (Activity Diagram)"
            description="Диаграмма активности показывает поток процессов в системе, включая принятие решений и параллельные процессы. 
    Эта диаграмма иллюстрирует основные рабочие процессы в HCM-системе."
            mermaidCode={activityMermaidDiagram}
          />
        </Diagrams>
      )}

      <Footer />
    </div>
  );
};

export default function Docs() {
  const navigate = useNavigate();

  useEffect(() => {
    const registered = localStorage.getItem("registered");
    if (!registered) {
      navigate("/register", { replace: true });
    }
  }, [navigate]);

  return <DocsContent />;
}
