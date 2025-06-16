import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Award, Globe, Lightbulb, Handshake, Rocket } from "lucide-react";

const divider = (
  <div className="h-1 w-24 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full my-6" />
);

const kpiRows = [
  ["Общие инвестиции", "8.5 млн руб."],
  ["Годовая экономия", "6.7 млн руб."],
  ["ROI к 5 году", "210%"],
  ["Срок окупаемости", "2 года"],
  ["Пользователи (2025)", "600"],
  ["Покрытие HR-требований", "95%"],
  ["Точность ML-прогнозов", "87%"],
  ["Время отклика (web/API)", "450/120 мс"],
];

export default function ConclusionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-2">8. Заключение</h2>
      {divider}
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Итоги проекта и достигнутые результаты</h3>
      <p className="mb-4 text-gray-800">
        Проект <b>SUpperHCM</b> — комплексное решение для автоматизации управления персоналом в агросекторе, объединяющее ML и HR-процессы. В ходе разработки создана уникальная система, не имеющая прямых аналогов на российском рынке.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="flex items-center gap-2 mb-2 text-teal-700 font-bold"><Lightbulb className="h-5 w-5" />Технологические инновации</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            <li>Первая в России HCM-система для агросектора</li>
            <li>ML-прогнозы урожайности (точность 87%)</li>
            <li>Масштабируемая микросервисная архитектура (до 2100 пользователей)</li>
            <li>Высокая производительность: web 450 мс, API 120 мс</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow border border-orange-100 p-4">
          <div className="flex items-center gap-2 mb-2 text-orange-700 font-bold"><TrendingUp className="h-5 w-5" />Экономическая эффективность</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            <li>Инвестиции: 8.5 млн руб.</li>
            <li>Годовая экономия: 6.7 млн руб.</li>
            <li>ROI к 5 году: 210%</li>
            <li>Окупаемость: 2 года</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow border border-blue-100 p-4">
          <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold"><Award className="h-5 w-5" />Функциональные возможности</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            <li>Покрытие 95% HR-требований</li>
            <li>Автоматизация расчета ЗП (99.9%)</li>
            <li>Интеграция с банковскими системами</li>
            <li>GPS-мониторинг 70% операций</li>
          </ul>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-teal-700 mb-2">Ключевые показатели проекта</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-[340px] w-full border border-teal-100 rounded-xl text-sm">
          <tbody>
            {kpiRows.map(([k, v]) => (
              <tr key={k} className="even:bg-teal-50">
                <td className="py-2 px-4 font-medium text-gray-700 border-b border-teal-50">{k}</td>
                <td className="py-2 px-4 text-gray-900 border-b border-teal-50">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Соответствие поставленным целям</h3>
      <ul className="mb-8 space-y-2">
        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /> <span><b>Цель 1: Оптимизация учета сотрудников</b> — <span className="text-green-700">Полностью достигнута</span><br/><span className="text-gray-700 text-sm">Создана база сотрудников (600 пользователей), автоматизированы процессы приема/увольнения, снижены трудозатраты HR-отдела на 40%.</span></span></li>
        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /> <span><b>Цель 2: Автоматизация бизнес-процессов</b> — <span className="text-green-700">Достигнута на 90%</span><br/><span className="text-gray-700 text-sm">Автоматизированы ключевые HR-процессы, интегрированы банковские API, создана система электронного документооборота.</span></span></li>
        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /> <span><b>Цель 3: Внедрение машинного обучения</b> — <span className="text-green-700">Достигнута на 87%</span><br/><span className="text-gray-700 text-sm">Разработаны ML-модели для прогнозирования урожайности, внедрена аналитика производительности, модуль оптимизации ресурсов.</span></span></li>
      </ul>
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Анализ рисков и их митигация</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-1">Технические риски</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            <li>Сложность интеграций — минимизирована поэтапным внедрением</li>
            <li>Производительность ML — обеспечена оптимизацией</li>
            <li>Масштабируемость — решена микросервисной архитектурой</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow border border-orange-100 p-4">
          <div className="font-bold text-gray-800 mb-1">Экономические риски</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            <li>Превышение бюджета — предотвращено планированием</li>
            <li>Волатильность сектора — учтена в финансовой модели</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow border border-blue-100 p-4">
          <div className="font-bold text-gray-800 mb-1">Организационные риски</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
            <li>Сопротивление персонала — минимизировано обучением</li>
            <li>Нехватка экспертизы — решена привлечением консультантов</li>
          </ul>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Конкурентные преимущества и позиционирование</h3>
      <ul className="mb-6 list-disc pl-6 text-gray-700">
        <li>Единственная HCM-система для российского агросектора</li>
        <li>Стоимость внедрения в 3-6 раз ниже западных аналогов</li>
        <li>Полная интеграция HR и агроданных</li>
        <li>100% соответствие ФЗ-152 и российскому законодательству</li>
      </ul>
      <div className="mb-8">
        <div className="font-bold text-gray-800 mb-1">Рыночная позиция:</div>
        <ul className="list-disc pl-6 text-gray-700 text-sm">
          <li>Целевой сегмент: средние и крупные агропредприятия (500-5000 сотрудников)</li>
          <li>Потенциальный рынок: 2000+ агрокомплексов в России</li>
          <li>Возможность экспансии в СНГ</li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Перспективы развития и масштабирования</h3>
      <div className="mb-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="flex items-center gap-2 mb-1 text-teal-700 font-bold"><Rocket className="h-5 w-5" />Краткосрочные (1-2 года)</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>10-15 клиентов-агропредприятий</li>
            <li>Развитие мобильного приложения</li>
            <li>Сертификация отраслевых стандартов</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow border border-orange-100 p-4">
          <div className="flex items-center gap-2 mb-1 text-orange-700 font-bold"><Globe className="h-5 w-5" />Среднесрочные (3-5 лет)</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>SaaS-версия для малых предприятий</li>
            <li>Экспансия в Казахстан, Беларусь, Узбекистан</li>
            <li>Интеграции с AgriTech-решениями</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow border border-blue-100 p-4">
          <div className="flex items-center gap-2 mb-1 text-blue-700 font-bold"><Handshake className="h-5 w-5" />Долгосрочные (5-10 лет)</div>
          <ul className="list-disc pl-6 text-gray-700 text-sm">
            <li>Комплексная платформа управления</li>
            <li>Выход на международные рынки</li>
            <li>IPO или стратегический инвестор</li>
          </ul>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Влияние на отрасль и социальная значимость</h3>
      <ul className="mb-6 list-disc pl-6 text-gray-700">
        <li>Создание отраслевых стандартов HR в агросекторе</li>
        <li>Повышение эффективности трудовых ресурсов</li>
        <li>Содействие импортозамещению в ПО</li>
        <li>Улучшение условий труда работников</li>
        <li>Прозрачность трудовых отношений</li>
        <li>Новые рабочие места в агротехе</li>
      </ul>
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Рекомендации по дальнейшему развитию</h3>
      <div className="mb-8 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow border border-teal-100 p-4">
          <div className="font-bold text-gray-800 mb-1">Технические рекомендации</div>
          <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
            <li>Интеграция с IoT-устройствами</li>
            <li>Внедрение блокчейна для прозрачности</li>
            <li>AI в HR-аналитике</li>
          </ol>
        </div>
        <div className="bg-white rounded-xl shadow border border-orange-100 p-4">
          <div className="font-bold text-gray-800 mb-1">Бизнес-рекомендации</div>
          <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
            <li>Партнерская сеть для масштабирования</li>
            <li>Консалтинг по цифровизации HR</li>
            <li>Инвестиции в маркетинг и PR</li>
          </ol>
        </div>
        <div className="bg-white rounded-xl shadow border border-blue-100 p-4">
          <div className="font-bold text-gray-800 mb-1">Стратегические рекомендации</div>
          <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-1">
            <li>Венчурный фонд для AgriTech</li>
            <li>Академические партнерства</li>
            <li>Госпрограммы поддержки цифровизации</li>
          </ol>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-teal-700 mb-2">Заключительные выводы</h3>
      <p className="mb-6 text-gray-800">
        Проект <b>SUpperHCM</b> успешно достиг поставленных целей и создал основу для развития цифровых технологий в российском АПК. Система демонстрирует высокую экономическую эффективность, технологическую инновационность и социальную значимость.
      </p>
      <div className="bg-gradient-to-r from-teal-100 to-orange-50 rounded-xl p-6 shadow flex flex-col items-center mb-4">
        <div className="text-lg font-bold text-teal-800 mb-2">Хотите стать партнером или инвестором?</div>
        <div className="text-gray-700 mb-2">Свяжитесь с командой SUpperHCM для обсуждения сотрудничества и инвестиций в развитие цифровых HR-решений для агросектора.</div>
        <a href="mailto:info@superhcm.ru" className="inline-block mt-2 px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-teal-700 transition">Связаться с командой</a>
      </div>
    </motion.section>
  );
} 