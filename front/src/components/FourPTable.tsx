import { motion } from "framer-motion";
import { Package, DollarSign, MapPin, Megaphone } from "lucide-react";

const priceTable = (
  <table className="w-full text-sm border mt-4 mb-6 bg-white rounded-xl overflow-hidden shadow">
    <thead className="bg-teal-50">
      <tr>
        <th className="p-2 border">Решение</th>
        <th className="p-2 border">Стоимость внедрения</th>
        <th className="p-2 border">Годовые расходы</th>
        <th className="p-2 border">Специализация для АПК</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-2 border font-medium">SUpperHCM</td>
        <td className="p-2 border text-green-700 font-bold">5-10 млн руб.</td>
        <td className="p-2 border text-green-700 font-bold">2-4 млн руб.</td>
        <td className="p-2 border text-green-700 font-bold">✅ Полная</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">SAP SuccessFactors</td>
        <td className="p-2 border text-red-700">25-40 млн руб.</td>
        <td className="p-2 border text-red-700">8-12 млн руб.</td>
        <td className="p-2 border text-gray-500">❌ Универсальная</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">Workday HCM</td>
        <td className="p-2 border text-red-700">30-50 млн руб.</td>
        <td className="p-2 border text-red-700">10-15 млн руб.</td>
        <td className="p-2 border text-gray-500">❌ Универсальная</td>
      </tr>
      <tr>
        <td className="p-2 border font-medium">1С:ЗУП + доработки</td>
        <td className="p-2 border text-yellow-700">3-8 млн руб.</td>
        <td className="p-2 border text-yellow-700">1-3 млн руб.</td>
        <td className="p-2 border text-yellow-700">⚡ Частичная</td>
      </tr>
    </tbody>
  </table>
);

const divider = (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="h-1 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full my-8"
  />
);

const blockAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const accentCard = "rounded-2xl shadow-lg border border-gray-100 bg-white/90 p-6 mb-8";
const accentListTeal = "bg-teal-50 border-l-4 border-teal-300 p-4 rounded-lg mb-2";
const accentListOrange = "bg-orange-50 border-l-4 border-orange-300 p-4 rounded-lg mb-2";
const accentListBlue = "bg-blue-50 border-l-4 border-blue-300 p-4 rounded-lg mb-2";
const accentListRed = "bg-red-50 border-l-4 border-red-300 p-4 rounded-lg mb-2";

const FourPTable = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-20 px-4 max-w-4xl mx-auto relative z-1"
    >
      <div className="relative mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-teal-100 p-2 rounded-lg shadow">
            <div className="flex space-x-1">
              <Package className="h-5 w-5 text-teal-700" />
              <DollarSign className="h-5 w-5 text-orange-600" />
            </div>
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl md:text-4xl font-bold text-teal-800 drop-shadow-sm"
          >
            4P анализ
          </motion.h1>
        </div>
        {divider}
      </div>
      {/* Product */}
      <motion.div {...blockAnim} className={accentCard}>
        <div className="flex items-center gap-2 mb-2">
          <Package className="h-5 w-5 text-teal-700" />
          <h2 className="text-xl font-semibold text-teal-700">Product (Продукт)</h2>
        </div>
        <div className="mb-2 font-semibold text-teal-700">Основные компоненты системы:</div>
        <div className={accentListTeal}>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>HCM-платформа:</b> Полнофункциональная система управления персоналом с веб-интерфейсом и мобильным приложением</li>
            <li><b>ML-модуль AgriPredict:</b> Система прогнозирования урожайности на базе машинного обучения</li>
            <li><b>GPS-модуль FieldTracker:</b> Мониторинг полевых работ и контроль сельхозтехники в реальном времени</li>
            <li><b>Интеграционная платформа:</b> API для связи с банками, 1С, CRM-системами и IoT-устройствами</li>
          </ul>
        </div>
        <div className="mb-2 font-semibold text-teal-700">Уникальные особенности, отличающие от конкурентов:</div>
        <div className="mb-1 font-medium text-gray-800">Агроспециализация:</div>
        <div className={accentListTeal}>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Учет сезонности сельхозработ в планировании персонала</li>
            <li>Специализированные роли: агроном, тракторист, комбайнер, бригадир</li>
            <li>Интеграция с календарем агротехнических мероприятий</li>
            <li>Учет погодных условий при планировании работ</li>
          </ul>
        </div>
        <div className="mb-1 font-medium text-gray-800">Технологические преимущества:</div>
        <div className={accentListTeal}>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Гибридная ML-модель: комбинация исторических данных, спутниковых снимков и IoT-датчиков</li>
            <li>Предиктивная аналитика кадровых потребностей на основе прогноза урожая</li>
            <li>Автоматическое формирование оптимальных бригад для полевых работ</li>
            <li>Интеллектуальная система мотивации на основе KPI и результатов работы</li>
          </ul>
        </div>
        <div className="mb-1 font-medium text-gray-800">Функциональные преимущества:</div>
        <div className={accentListTeal}>
          <ul className="list-disc pl-6 text-gray-800">
            <li><b>Единая экосистема:</b> Объединение HR, агрономии и логистики в одной системе</li>
            <li><b>Мобильность:</b> Работа в поле через мобильное приложение без интернета (офлайн-режим)</li>
            <li><b>Масштабируемость:</b> От малого фермерского хозяйства до крупного агрохолдинга</li>
            <li><b>Российская локализация:</b> 100% соответствие ТК РФ и отраслевым соглашениям</li>
          </ul>
        </div>
      </motion.div>
      {divider}
      {/* Price */}
      <motion.div {...blockAnim} className={accentCard}>
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-5 w-5 text-orange-600" />
          <h2 className="text-xl font-semibold text-orange-700">Price (Цена)</h2>
        </div>
        <div className="mb-2 font-semibold text-orange-700">Модель ценообразования:</div>
        <div className={accentListOrange}>
          <div className="mb-1 font-medium text-gray-800">Разовые затраты на внедрение:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>Базовая лицензия (до 100 сотрудников):</b> 2,5 млн руб.</li>
            <li><b>Корпоративная лицензия (100-500 сотрудников):</b> 5 млн руб.</li>
            <li><b>Энтерпрайз лицензия (500+ сотрудников):</b> 8-12 млн руб.</li>
            <li><b>Кастомизация и интеграция:</b> 1-3 млн руб. (в зависимости от сложности)</li>
            <li><b>Обучение персонала:</b> 200-500 тыс. руб.</li>
          </ul>
        </div>
        <div className={accentListOrange}>
          <div className="mb-1 font-medium text-gray-800">Подписочная модель (SaaS):</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>Базовый тариф:</b> 2,500 руб./месяц за пользователя</li>
            <li><b>Профессиональный:</b> 4,000 руб./месяц за пользователя (включает ML-модуль)</li>
            <li><b>Энтерпрайз:</b> 6,000 руб./месяц за пользователя (включает GPS и полную аналитику)</li>
          </ul>
        </div>
        <div className="mb-2 font-semibold text-orange-700">Расчет ROI (Return on Investment):</div>
        <div className={accentListOrange}>
          <div className="mb-1 font-medium text-gray-800">Экономия от автоматизации (в год):</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Сокращение HR-персонала: 40% × 3 млн руб. = 1,2 млн руб.</li>
            <li>Оптимизация фонда оплаты труда: 15% × 50 млн руб. = 7,5 млн руб.</li>
            <li>Снижение потерь урожая: 10% × 100 млн руб. = 10 млн руб.</li>
            <li>Экономия на топливе (GPS-мониторинг): 20% × 5 млн руб. = 1 млн руб.</li>
            <li className="font-bold">Общая экономия: 19,7 млн руб./год</li>
          </ul>
        </div>
        <div className={accentListOrange}>
          <div className="mb-1 font-medium text-gray-800">Окупаемость инвестиций:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>При инвестициях 8 млн руб. → ROI = 146% в первый год</li>
            <li>Срок окупаемости: 4-5 месяцев</li>
          </ul>
        </div>
        <div className="mb-2 font-semibold text-orange-700">Сравнение с альтернативами:</div>
        <div className="overflow-x-auto">{priceTable}</div>
        <div className="mb-2 font-semibold text-orange-700">Ценностное предложение:</div>
        <div className={accentListOrange}>
          <ul className="list-disc pl-6 text-gray-800">
            <li><b>В 3-5 раз дешевле</b> западных аналогов при сопоставимом функционале</li>
            <li><b>Уникальная специализация</b> для агросектора повышает эффективность на 25-30%</li>
            <li><b>Быстрая окупаемость</b> за счет автоматизации специфических агропроцессов</li>
          </ul>
        </div>
      </motion.div>
      {divider}
      {/* Place */}
      <motion.div {...blockAnim} className={accentCard}>
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-blue-700">Place (Место)</h2>
        </div>
        <div className="mb-2 font-semibold text-blue-700">Стратегия внедрения:</div>
        <div className={accentListBlue}>
          <div className="mb-1 font-medium text-gray-800">Поэтапное развертывание:</div>
          <ol className="list-decimal pl-6 mb-2 text-gray-800">
            <li><b>Пилотный проект (3 месяца):</b> Внедрение в одном подразделении агрокомплекса</li>
            <li><b>Локальное масштабирование (6 месяцев):</b> Распространение на весь агрокомплекс</li>
            <li><b>Региональная экспансия (12 месяцев):</b> Выход на рынок Центрального ЧР</li>
            <li><b>Федеральный уровень (24 месяца):</b> Масштабирование по всей России</li>
          </ol>
        </div>
        <div className={accentListBlue}>
          <div className="mb-1 font-medium text-gray-800">Каналы распространения:</div>
          <div className="mb-1 font-semibold text-blue-700">Прямые продажи:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Собственный отдел продаж для работы с крупными агрохолдингами</li>
            <li>Участие в профильных выставках (АгроФарм, Золотая осень, День поля)</li>
            <li>Прямой маркетинг через базы агропредприятий</li>
          </ul>
        </div>
        <div className={accentListBlue}>
          <div className="mb-1 font-semibold text-blue-700">Партнерская сеть:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>Системные интеграторы:</b> Партнерство с компаниями, специализирующимися на АПК</li>
            <li><b>1С-франчайзи:</b> Интеграция с партнерской сетью 1С для комплексных решений</li>
            <li><b>Консалтинговые компании:</b> Сотрудничество с McKinsey, Deloitte по цифровизации АПК</li>
            <li><b>Технологические партнеры:</b> Альянс с производителями сельхозтехники и IoT-решений</li>
          </ul>
        </div>
        <div className={accentListBlue}>
          <div className="mb-1 font-medium text-gray-800">Модели распространения:</div>
          <div className="mb-1 font-semibold text-blue-700">On-Premise решение:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Установка на серверах клиента для крупных агрохолдингов</li>
            <li>Полный контроль над данными и инфраструктурой</li>
            <li>Высокая степень кастомизации</li>
          </ul>
        </div>
        <div className={accentListBlue}>
          <div className="mb-1 font-semibold text-blue-700">SaaS-модель (Software as a Service):</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Облачная платформа для средних и малых агропредприятий</li>
            <li>Быстрое внедрение без капитальных затрат на ИТ-инфраструктуру</li>
            <li>Автоматические обновления и техподдержка</li>
            <li>Возможность масштабирования по требованию</li>
          </ul>
        </div>
        <div className={accentListBlue}>
          <div className="mb-1 font-semibold text-blue-700">Гибридная модель:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Критичные данные хранятся локально</li>
            <li>Аналитика и ML-обработка в облаке</li>
            <li>Оптимальный баланс безопасности и функциональности</li>
          </ul>
        </div>
        <div className={accentListBlue}>
          <div className="mb-1 font-medium text-gray-800">Географическая стратегия:</div>
          <ul className="list-disc pl-6 text-gray-800">
            <li><b>Приоритет 1:</b> Центральное Черноземье, Краснодарский край, Ростовская область</li>
            <li><b>Приоритет 2:</b> Поволжье, Западная Сибирь, Северный Кавказ</li>
            <li><b>Приоритет 3:</b> Страны СНГ (Казахстан, Беларусь, Узбекистан)</li>
          </ul>
        </div>
      </motion.div>
      {divider}
      {/* Promotion */}
      <motion.div {...blockAnim} className={accentCard}>
        <div className="flex items-center gap-2 mb-2">
          <Megaphone className="h-5 w-5 text-red-600" />
          <h2 className="text-xl font-semibold text-red-700">Promotion (Продвижение)</h2>
        </div>
        <div className="mb-2 font-semibold text-red-700">Позиционирование на рынке:</div>
        <div className={accentListRed}>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>Слоган:</b> "SUpperHCM – умное управление персоналом для умного земледелия"</li>
            <li><b>Ценностное предложение:</b> Единственная HCM-система, созданная специально для агросектора с интеграцией ML и IoT</li>
            <li><b>Целевое позиционирование:</b> Технологический лидер в цифровизации кадровых процессов АПК</li>
          </ul>
        </div>
        <div className="mb-2 font-semibold text-red-700">Маркетинговая стратегия:</div>
        <div className={accentListRed}>
          <div className="mb-1 font-medium text-gray-800">Digital-маркетинг:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>Контент-маркетинг:</b> Блог с кейсами внедрения, вебинары по цифровизации АПК</li>
            <li><b>SEO-продвижение:</b> Топ-позиции по запросам "автоматизация HR в сельском хозяйстве"</li>
            <li><b>Таргетированная реклама:</b> Яндекс.Директ и Google Ads для руководителей агропредприятий</li>
            <li><b>Социальные сети:</b> LinkedIn для B2B, профильные Telegram-каналы</li>
          </ul>
        </div>
        <div className={accentListRed}>
          <div className="mb-1 font-medium text-gray-800">Офлайн-продвижение:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>Участие в выставках:</b> 
              <ul className="list-disc pl-6">
                <li>АгроФарм (15-17 февраля 2025) – презентация ML-модуля</li>
                <li>Золотая осень (октябрь 2025) – демонстрация результатов внедрения</li>
                <li>День поля (июль 2025) – показ мобильного приложения</li>
              </ul>
            </li>
            <li><b>Конференции и форумы:</b> Выступления на AgriTech Forum, Цифровое сельское хозяйство</li>
            <li><b>Отраслевые СМИ:</b> Публикации в "АгроИнвестор", "Агротех", "Крестьянские ведомости"</li>
          </ul>
        </div>
        <div className={accentListRed}>
          <div className="mb-1 font-medium text-gray-800">Partnership Marketing:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li><b>Стратегические альянсы:</b> Совместные проекты с John Deere, CLAAS, Ростсельмаш</li>
            <li><b>Государственные программы:</b> Участие в нацпроекте "Цифровая экономика"</li>
            <li><b>Образовательные партнерства:</b> Сотрудничество с РГАУ-МСХА, СПбГАУ</li>
          </ul>
        </div>
        <div className="mb-2 font-semibold text-red-700">Программа лояльности клиентов:</div>
        <div className={accentListRed}>
          <div className="mb-1 font-medium text-gray-800">Пилотная программа:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>50% скидка на внедрение для первых 5 клиентов</li>
            <li>Бесплатная техподдержка в течение первого года</li>
            <li>Персональный менеджер проекта</li>
          </ul>
        </div>
        <div className={accentListRed}>
          <div className="mb-1 font-medium text-gray-800">Реферальная программа:</div>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>10% от стоимости контракта за приведенного клиента</li>
            <li>Дополнительные модули бесплатно при привлечении 3+ клиентов</li>
          </ul>
        </div>
        <div className="mb-2 font-semibold text-red-700">План продвижения по этапам:</div>
        <div className={accentListRed}>
          <ol className="list-decimal pl-6 mb-2 text-gray-800">
            <li><b>Этап 1 (Q1 2025) – Подготовка к запуску:</b> Разработка маркетинговых материалов, запуск корпоративного сайта и демо-версии, подготовка к участию в АгроФарм, бюджет: 2 млн руб.</li>
            <li><b>Этап 2 (Q2-Q3 2025) – Активное продвижение:</b> Запуск рекламных кампаний, участие в отраслевых мероприятиях, PR-кампания в специализированных СМИ, бюджет: 5 млн руб.</li>
            <li><b>Этап 3 (Q4 2025 – Q1 2026) – Масштабирование:</b> Расширение географии присутствия, запуск партнерских программ, международное продвижение (СНГ), бюджет: 8 млн руб.</li>
          </ol>
        </div>
        <div className="mb-2 font-semibold text-red-700">KPI маркетинговых активностей:</div>
        <div className={accentListRed}>
          <ul className="list-disc pl-6 mb-2 text-gray-800">
            <li>Количество лидов: 200+ в месяц к концу 2025 года</li>
            <li>Конверсия лид → клиент: 15%</li>
            <li>CAC (Customer Acquisition Cost): не более 500 тыс. руб.</li>
            <li>LTV (Lifetime Value): не менее 5 млн руб.</li>
            <li>ROI маркетинга: не менее 300%</li>
          </ul>
        </div>
        <div className="mb-2 font-semibold text-red-700">Управление репутацией:</div>
        <div className={accentListRed}>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Сбор и публикация отзывов клиентов</li>
            <li>Участие в отраслевых рейтингах и премиях</li>
            <li>Создание экспертного образа в профессиональных кругах</li>
            <li>Активная работа с негативными отзывами</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FourPTable; 