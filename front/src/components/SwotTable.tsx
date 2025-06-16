import { motion } from "framer-motion";
import { BarChart2, Table as TableIcon, Award, Lightbulb, Shield } from "lucide-react";
import Table, { type TableRowData } from "@/components/Table";

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
      "Уникальное сочетание HCM-системы с ML-анализом для агросектора",
      "Интеграция GPS-мониторинга для контроля полевых работ",
      "Открытая архитектура, позволяющая кастомизацию под специфику агробизнеса",
      "Потенциал для создания экосистемы агротехнологий"
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
      "Зависимость от качества исходных данных для ML-модели",
      "Необходимость постоянного обновления алгоритмов под изменения в агрономии",
      "Сложность адаптации универсальных HR-процессов под сезонность сельхозработ",
      "Отсутствие готовых решений для специфических агропроцессов"
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
      "Интеграция с IoT-датчиками почвы и климатическими станциями",
      "Развитие блокчейн-технологий для прозрачности цепочки поставок",
      "Государственная поддержка цифровизации сельского хозяйства",
      "Экспорт решения в страны СНГ и развивающиеся рынки"
    ],
    color: "blue",
  },
  {
    key: "threats",
    title: "Угрозы (Threats)",
    items: [
      'См. подробный список угроз ниже'
    ],
    color: "red",
  },
];

const competitorTable = (
  <table className="w-full text-sm border mt-8 mb-4 bg-white rounded-xl overflow-hidden shadow">
    <thead className="bg-teal-50">
      <tr>
        <th className="p-2 border">Критерий</th>
        <th className="p-2 border">SUpperHCM</th>
        <th className="p-2 border">SAP SuccessFactors</th>
        <th className="p-2 border">Workday HCM</th>
        <th className="p-2 border">1С:Зарплата и управление персоналом</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-2 border font-medium">Специализация для агросектора</td>
        <td className="p-2 border text-green-700 font-bold">✅ Полная адаптация</td>
        <td className="p-2 border text-gray-500">❌ Универсальное решение</td>
        <td className="p-2 border text-gray-500">❌ Универсальное решение</td>
        <td className="p-2 border text-yellow-700">⚡ Частичная адаптация</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">ML-прогнозирование урожая</td>
        <td className="p-2 border text-green-700 font-bold">✅ Встроенный модуль</td>
        <td className="p-2 border text-gray-500">❌ Отсутствует</td>
        <td className="p-2 border text-gray-500">❌ Отсутствует</td>
        <td className="p-2 border text-gray-500">❌ Отсутствует</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">GPS-мониторинг полей</td>
        <td className="p-2 border text-green-700 font-bold">✅ Интегрированный</td>
        <td className="p-2 border text-yellow-700">⚡ Через сторонние решения</td>
        <td className="p-2 border text-yellow-700">⚡ Через сторонние решения</td>
        <td className="p-2 border text-gray-500">❌ Отсутствует</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">Стоимость внедрения</td>
        <td className="p-2 border text-green-700 font-bold">✅ 5-10 млн руб.</td>
        <td className="p-2 border text-red-700">❌ 20-50 млн руб.</td>
        <td className="p-2 border text-red-700">❌ 30-60 млн руб.</td>
        <td className="p-2 border text-green-700 font-bold">✅ 2-5 млн руб.</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">Локализация для РФ</td>
        <td className="p-2 border text-green-700 font-bold">✅ Полная</td>
        <td className="p-2 border text-yellow-700">⚡ Частичная</td>
        <td className="p-2 border text-yellow-700">⚡ Частичная</td>
        <td className="p-2 border text-green-700 font-bold">✅ Полная</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">Интеграция с банковскими API</td>
        <td className="p-2 border text-green-700 font-bold">✅ Встроенная</td>
        <td className="p-2 border text-green-700 font-bold">✅ Есть</td>
        <td className="p-2 border text-green-700 font-bold">✅ Есть</td>
        <td className="p-2 border text-green-700 font-bold">✅ Есть</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">Мобильное приложение</td>
        <td className="p-2 border text-green-700 font-bold">✅ Планируется</td>
        <td className="p-2 border text-green-700 font-bold">✅ Есть</td>
        <td className="p-2 border text-green-700 font-bold">✅ Есть</td>
        <td className="p-2 border text-yellow-700">⚡ Ограниченный функционал</td>
      </tr>
    </tbody>
  </table>
);

const quantTable = (
  <table className="w-full text-sm border mt-8 mb-4 bg-white rounded-xl overflow-hidden shadow">
    <thead className="bg-teal-50">
      <tr>
        <th className="p-2 border">Фактор</th>
        <th className="p-2 border">Вес (1-5)</th>
        <th className="p-2 border">Влияние на проект</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="p-2 border font-bold text-teal-700" colSpan={3}>Сильные стороны</td></tr>
      <tr><td className="p-2 border">Специализация для агросектора</td><td className="p-2 border">5</td><td className="p-2 border">Критически важно</td></tr>
      <tr><td className="p-2 border">ML-прогнозирование</td><td className="p-2 border">4</td><td className="p-2 border">Высокое конкурентное преимущество</td></tr>
      <tr><td className="p-2 border">Интеграция с внешними системами</td><td className="p-2 border">4</td><td className="p-2 border">Значительное удобство</td></tr>
      <tr><td className="p-2 border font-bold text-orange-700" colSpan={3}>Слабые стороны</td></tr>
      <tr><td className="p-2 border">Высокие затраты на разработку</td><td className="p-2 border">5</td><td className="p-2 border">Критический фактор</td></tr>
      <tr><td className="p-2 border">Сложность адаптации пользователей</td><td className="p-2 border">4</td><td className="p-2 border">Существенный риск</td></tr>
      <tr><td className="p-2 border font-bold text-blue-700" colSpan={3}>Возможности</td></tr>
      <tr><td className="p-2 border">Государственная поддержка АПК</td><td className="p-2 border">5</td><td className="p-2 border">Стратегическая важность</td></tr>
      <tr><td className="p-2 border">Расширение на рынки СНГ</td><td className="p-2 border">4</td><td className="p-2 border">Высокий потенциал роста</td></tr>
      <tr><td className="p-2 border font-bold text-red-700" colSpan={3}>Угрозы</td></tr>
      <tr><td className="p-2 border">Изменение законодательства</td><td className="p-2 border">5</td><td className="p-2 border">Критический риск</td></tr>
      <tr><td className="p-2 border">Технические сбои ML-модели</td><td className="p-2 border">4</td><td className="p-2 border">Высокий операционный риск</td></tr>
    </tbody>
  </table>
);

const SwotTable = () => {
  return (
    <section className="mb-20 px-4 max-w-4xl mx-auto">
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

      {/* Подробные угрозы */}
      <div className="mt-8 mb-10">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-red-600" />
          <h2 className="text-lg font-semibold text-red-700">Детализированные угрозы</h2>
        </div>
        <div className="mb-2 font-semibold text-red-700">Законодательные риски:</div>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Ужесточение требований ФЗ-152 к обработке персональных данных сельхозработников</li>
          <li>Изменения в трудовом законодательстве, касающиеся сезонных работников</li>
          <li>Новые требования к отчетности в Росстат и налоговые органы</li>
          <li>Возможные ограничения на использование ML-алгоритмов в кадровых решениях</li>
        </ul>
        <div className="mb-2 font-semibold text-red-700">Технические риски ML-модели:</div>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Деградация точности предсказаний из-за изменения климатических условий</li>
          <li>Переобучение модели на исторических данных, не учитывающих новые факторы</li>
          <li>Необходимость постоянной ретренировки модели при изменении сортов культур</li>
          <li>Риск кибератак на ML-модель и возможность искажения результатов</li>
        </ul>
        <div className="mb-2 font-semibold text-red-700">Экономические факторы в агросекторе:</div>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Волатильность цен на сельхозпродукцию, влияющая на бюджет ИТ-проектов</li>
          <li>Зависимость от государственных субсидий и их возможное сокращение</li>
          <li>Сезонность доходов агропредприятий, осложняющая планирование затрат на ИТ</li>
          <li>Рост стоимости энергоресурсов, влияющий на операционные расходы</li>
        </ul>
      </div>

      {/* Конкурентный анализ */}
      <div className="mt-16 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <TableIcon className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-blue-700">Конкурентный анализ HCM-систем</h2>
        </div>
        <div className="overflow-x-auto">{competitorTable}</div>
        <div className="mb-2 mt-4 font-semibold text-teal-700">Конкурентные преимущества SUpperHCM:</div>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Единственное решение, специально разработанное для агросектора</li>
          <li>Уникальная интеграция HR-процессов с агрономическими данными</li>
          <li>Значительно более низкая стоимость по сравнению с западными аналогами</li>
          <li>Полная совместимость с российским законодательством с момента запуска</li>
        </ul>
        <div className="mb-2 font-semibold text-orange-700">Конкурентные недостатки:</div>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Отсутствие репутации на рынке (новый продукт)</li>
          <li>Меньший функционал в стандартных HR-процессах по сравнению с mature-решениями</li>
          <li>Отсутствие глобальной поддержки и партнерской сети</li>
        </ul>
      </div>

      {/* Стратегические рекомендации */}
      <div className="mt-16 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          <h2 className="text-xl font-semibold text-yellow-700">Стратегические рекомендации на основе SWOT-анализа</h2>
        </div>
        <div className="mb-2 font-semibold text-teal-700">Стратегии SO (Сильные стороны + Возможности):</div>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><b>Развитие экосистемы AgriTech:</b> Использовать уникальную позицию для создания комплексной платформы управления агропредприятием</li>
          <li><b>Экспансия на рынки СНГ:</b> Адаптировать решение для Казахстана, Беларуси, Узбекистана с учетом местной специфики</li>
          <li><b>Партнерство с производителями сельхозтехники:</b> Интегрироваться с John Deere, CLAAS для получения данных с техники</li>
          <li><b>Привлечение государственного финансирования:</b> Участвовать в программах цифровизации АПК</li>
        </ul>
        <div className="mb-2 font-semibold text-orange-700">Стратегии WO (Слабые стороны + Возможности):</div>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><b>Создание центра компетенций:</b> Привлечь экспертов-агрономов для улучшения качества ML-алгоритмов</li>
          <li><b>Развитие партнерской сети:</b> Создать сеть внедренческих партнеров для масштабирования</li>
          <li><b>Стандартизация агро-HR процессов:</b> Разработать отраслевые стандарты для HR в агросекторе</li>
          <li><b>Создание обучающих программ:</b> Подготовка специалистов по цифровизации в АПК</li>
        </ul>
        <div className="mb-2 font-semibold text-green-700">Стратегии ST (Сильные стороны + Угрозы):</div>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><b>Диверсификация рисков:</b> Развивать решения для смежных отраслей (лесное хозяйство, рыбоводство)</li>
          <li><b>Создание резервных ML-моделей:</b> Разработать несколько алгоритмов для повышения надежности</li>
          <li><b>Юридическая защита:</b> Получить патенты на ключевые алгоритмы и технологические решения</li>
          <li><b>Создание антикризисного фонда:</b> Резервировать средства для поддержки клиентов в сложные периоды</li>
        </ul>
        <div className="mb-2 font-semibold text-red-700">Стратегии WT (Слабые стороны + Угрозы):</div>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><b>Минимизация зависимостей:</b> Создать план перехода на отечественные технологии при необходимости</li>
          <li><b>Страхование рисков:</b> Застраховать ключевые технологические и финансовые риски</li>
          <li><b>Создание альянсов:</b> Объединиться с другими российскими AgriTech компаниями для усиления позиций</li>
          <li><b>Разработка Lite-версии:</b> Создать упрощенную версию для малых агропредприятий с ограниченным бюджетом</li>
        </ul>
        <div className="mb-2 font-semibold text-teal-700">Приоритетные направления развития:</div>
        <ol className="list-decimal pl-6 text-gray-700">
          <li><b>Краткосрочные (0-1 год):</b> Завершение разработки MVP, привлечение первых клиентов, получение обратной связи</li>
          <li><b>Среднесрочные (1-3 года):</b> Масштабирование на российском рынке, развитие ML-компонента, создание мобильного приложения</li>
          <li><b>Долгосрочные (3-5 лет):</b> Экспансия в страны СНГ, создание экосистемы AgriTech, выход на IPO или поиск стратегического инвестора</li>
        </ol>
      </div>

      {/* Количественная оценка факторов */}
      <div className="mt-16 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-purple-600" />
          <h2 className="text-xl font-semibold text-purple-700">Количественная оценка SWOT-факторов</h2>
        </div>
        <div className="overflow-x-auto">{quantTable}</div>
        <div className="mt-2 text-gray-700 font-medium">
          <b>Итоговая оценка:</b> Проект имеет высокий потенциал успеха (общий балл: <span className="text-teal-700 font-bold">3.8/5</span>), но требует тщательного управления рисками и поэтапной реализации.
        </div>
      </div>
    </section>
  );
};

export default SwotTable; 