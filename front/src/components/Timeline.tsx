import { motion } from "framer-motion";
import { Calendar, ClipboardList, CheckCircle, Users, BarChart2 } from "lucide-react";

const stages = [
  {
    number: 1,
    title: "Инициация проекта",
    period: "Январь 2025 г.",
    tasks: [
      "Анализ потребностей агрокомплекса в автоматизации HR-процессов",
      "Формирование проектной команды (Project Manager, Lead Developer, ML Engineer, UI/UX Designer, DevOps Engineer)",
      "Определение технологического стека с обоснованием выбора (Python/Django, React, PostgreSQL, TensorFlow, Docker)",
      "Создание концепции продающего сайта агрокомплекса",
      "Первичная оценка бюджета (5-10 млн руб.) и определение источников финансирования"
    ],
    resources: [
      "Ответственный: Project Manager + Руководство агрокомплекса",
      "Человеко-часы: 160 часов",
      "Бюджет этапа: 500 тыс. руб."
    ],
    criteria: [
      "Утвержден устав проекта",
      "Сформирована команда разработки",
      "Определены ключевые KPI и метрики успеха",
      "Получено финансирование на следующие этапы"
    ],
    risks: [
      "Риск: Недостаток экспертизы в агросфере → Митигация: Привлечение консультанта",
      "Риск: Превышение бюджета → Митигация: Детальное планирование и контроль затрат"
    ]
  },
  {
    number: 2,
    title: "Планирование проекта",
    period: "Февраль 2025 г. – Март 2025 г.",
    tasks: [
      "Разработка детальной архитектуры системы с описанием всех компонентов",
      "Создание полного комплекта UML-диаграмм (Use Case, Class, Sequence, Component, State, Deployment)",
      "Планирование интеграций с детализацией API (1С, банковские системы, GPS-трекеры, системы видеонаблюдения)",
      "Техническое задание на ML-модель с описанием алгоритмов и источников данных",
      "План управления качеством (Code Review, Unit Testing, Integration Testing)",
      "Детальное планирование спринтов для Agile-разработки"
    ],
    resources: [
      "Ответственный: Lead Developer + Solution Architect",
      "Человеко-часы: 320 часов",
      "Бюджет этапа: 800 тыс. руб."
    ],
    criteria: [
      "Утверждена техническая архитектура системы",
      "Создан полный комплект проектной документации",
      "Подготовлены спецификации для всех интеграций",
      "Определен план тестирования и критерии приемки"
    ],
    risks: [
      "Риск: Сложность интеграций → Митигация: Создание MVP интеграций на раннем этапе",
      "Риск: Недооценка сложности ML-модели → Митигация: Консультации с экспертами по агрономии"
    ]
  },
  {
    number: 3,
    title: "Реализация проекта",
    period: "Март 2025 г. – Декабрь 2025 г.",
    tasks: [
      <>
        <b>Спринт 1-2 (Март – Апрель 2025):</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Разработка MVP системы управления персоналом</li>
          <li>Основные модули: Регистрация сотрудников, Базовый расчет зарплат, Система ролей</li>
          <li>Настройка CI/CD пайплайна и инфраструктуры разработки</li>
          <li><b>Критерий завершения:</b> Работающий MVP с базовым функционалом</li>
        </ul>
        <b>Спринт 3-6 (Май – Август 2025):</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Реализация ML-модуля для анализа данных и прогнозирования урожайности</li>
          <li>Разработка модуля аналитики производительности сотрудников</li>
          <li>Интеграция с банковскими API для автоматических выплат</li>
          <li>GPS-мониторинг полевых работ и техники</li>
          <li><b>Критерий завершения:</b> Полнофункциональная система с ML-компонентом</li>
        </ul>
        <b>Спринт 7-8 (Сентябрь – Октябрь 2025):</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Комплексное тестирование системы (функциональное, нагрузочное, интеграционное)</li>
          <li>Исправление критических и высокоприоритетных дефектов</li>
          <li>Оптимизация производительности и безопасности</li>
          <li><b>Критерий завершения:</b> Система готова к продуктивному использованию</li>
        </ul>
        <b>Спринт 9-10 (Ноябрь – Декабрь 2025):</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Поэтапное внедрение системы в агрокомплексе</li>
          <li>Обучение пользователей всех уровней</li>
          <li>Миграция данных из существующих систем</li>
          <li>Настройка мониторинга и алертинга</li>
          <li><b>Критерий завершения:</b> Система успешно внедрена и функционирует</li>
        </ul>
      </>
    ],
    resources: [
      "Команда: 6 разработчиков, 2 тестировщика, 1 DevOps, 1 аналитик",
      "Человеко-часы: 4800 часов",
      "Бюджет этапа: 7 млн руб."
    ],
    risks: [
      "Риск: Задержки в разработке → Митигация: Agile-методология с еженедельными ретроспективами",
      "Риск: Проблемы с производительностью ML → Митигация: Профилирование и оптимизация алгоритмов"
    ]
  },
  {
    number: 4,
    title: "Мониторинг и контроль проекта",
    period: "Март 2025 – Февраль 2026 (параллельно с реализацией)",
    tasks: [
      <>
        <b>Еженедельный контроль:</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Отслеживание прогресса по спринтам через Jira/Azure DevOps</li>
          <li>Контроль качества кода через Code Review и автоматические тесты</li>
          <li>Мониторинг бюджета и временных затрат</li>
          <li>Метрики: Velocity команды, Code Coverage, Burndown Charts</li>
        </ul>
        <b>Ежемесячная оценка:</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Анализ выполнения KPI проекта</li>
          <li>Оценка рисков и корректировка планов</li>
          <li>Ретроспективы команды и улучшение процессов</li>
          <li>Метрики: Customer Satisfaction, Defect Density, Performance Metrics</li>
        </ul>
        <b>Критерии качества:</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Code Coverage &gt; 80%</li>
          <li>Время отклика системы &lt; 2 сек</li>
          <li>Доступность системы &gt; 99.5%</li>
          <li>Точность ML-предсказаний &gt; 85%</li>
        </ul>
        <b>Управление изменениями:</b>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Процедура оценки влияния изменений на сроки и бюджет</li>
          <li>Change Control Board для принятия решений</li>
          <li>Документирование всех изменений в требованиях</li>
        </ul>
      </>
    ]
  },
  {
    number: 5,
    title: "Завершение проекта",
    period: "Январь 2026 г. – Март 2026 г.",
    tasks: [
      <>
        <b>Приемочное тестирование (Январь 2026):</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Пользовательское приемочное тестирование (UAT)</li>
          <li>Нагрузочное тестирование в продуктивной среде</li>
          <li>Тестирование безопасности и соответствия ФЗ-152</li>
          <li>Документирование всех результатов тестирования</li>
        </ul>
        <b>Обучение и передача (Февраль 2026):</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Обучение администраторов системы и пользователей</li>
          <li>Создание пользовательской документации и видеоинструкций</li>
          <li>Настройка процедур технической поддержки</li>
          <li>Передача исходного кода и технической документации</li>
        </ul>
        <b>Финальная оценка (Март 2026):</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Анализ достижения поставленных целей и KPI</li>
          <li>Оценка экономического эффекта от внедрения</li>
          <li>Проведение финального SWOT-анализа</li>
          <li>Подготовка итогового отчета и рекомендаций по развитию</li>
        </ul>
        <b>Критерии успешного завершения:</b>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Система принята в эксплуатацию без критических замечаний</li>
          <li>Обучены все группы пользователей</li>
          <li>Достигнуты запланированные показатели эффективности</li>
          <li>Подготовлена полная техническая документация</li>
        </ul>
        <b>Закрытие проекта:</b>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Высвобождение ресурсов проектной команды</li>
          <li>Архивирование проектной документации</li>
          <li>Проведение lessons learned сессии</li>
          <li>Планирование дальнейшего развития системы</li>
        </ul>
      </>
    ]
  }
];

const iconByStage = [
  <ClipboardList className="h-7 w-7 text-orange-600" />, // 1
  <BarChart2 className="h-7 w-7 text-teal-700" />,      // 2
  <Users className="h-7 w-7 text-blue-600" />,           // 3
  <CheckCircle className="h-7 w-7 text-green-600" />,    // 4
  <Calendar className="h-7 w-7 text-purple-600" />       // 5
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
            <ClipboardList className="h-6 w-6 text-teal-700" />
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-bold text-teal-700"
          >
            Этапы реализации проекта
          </motion.h1>
        </div>
      </div>
      <div className="space-y-16">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.number}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-50 p-3 rounded-lg shadow">
                {iconByStage[idx]}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-teal-600">{stage.number}.</span> {stage.title}
              </h2>
              <span className="ml-auto text-sm text-teal-700 font-medium bg-teal-50 px-3 py-1 rounded-full">
                {stage.period}
              </span>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-teal-700 mb-2">Основные задачи:</h3>
              {Array.isArray(stage.tasks)
                ? <ul className="list-disc pl-6 space-y-1 text-gray-700">{stage.tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
                : <div className="text-gray-700">{stage.tasks}</div>}
            </div>
            {stage.resources && (
              <div className="mb-4">
                <h3 className="font-semibold text-teal-700 mb-2">Ресурсы и ответственные:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">{stage.resources.map((r, i) => <li key={i}>{r}</li>)}</ul>
              </div>
            )}
            {stage.criteria && (
              <div className="mb-4">
                <h3 className="font-semibold text-teal-700 mb-2">Критерии завершения:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">{stage.criteria.map((c, i) => <li key={i}>{c}</li>)}</ul>
              </div>
            )}
            {stage.risks && (
              <div className="mb-4">
                <h3 className="font-semibold text-orange-700 mb-2">Управление рисками:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">{stage.risks.map((r, i) => <li key={i}>{r}</li>)}</ul>
              </div>
            )}
            {/* Красивый разделитель между этапами */}
            {idx < stages.length - 1 && (
              <div className="absolute left-1/2 -bottom-8 w-2/3 h-1 bg-gradient-to-r from-orange-400 via-teal-400 to-orange-400 rounded-full mx-auto" style={{ transform: 'translateX(-50%)' }} />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline; 