import { motion } from "framer-motion";
import { FileText, Target, Users, ClipboardList, Settings2 } from "lucide-react";

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

const accentList = "bg-teal-50 border-l-4 border-teal-300 p-4 rounded-lg mb-2";
const accentListOrange = "bg-orange-50 border-l-4 border-orange-300 p-4 rounded-lg mb-2";
const accentListBlue = "bg-blue-50 border-l-4 border-blue-300 p-4 rounded-lg mb-2";

const Description = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-16 px-4 max-w-4xl mx-auto"
    >
      <div className="relative mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-teal-100 p-2 rounded-lg shadow">
            <FileText className="h-7 w-7 text-teal-700" />
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl md:text-4xl font-bold text-teal-800 drop-shadow-sm"
          >
            Описание проекта
          </motion.h1>
        </div>
        {divider}
      </div>
      <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden space-y-14">
        {/* Цель проекта */}
        <motion.div {...blockAnim}>
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl md:text-2xl font-bold text-teal-700">Цель проекта</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3 text-lg">
            Проект представляет собой разработку <b>интегрированной системы управления персоналом (HCM)</b> для агрокомплекса с применением современных технологий машинного обучения.
          </p>
          <div className={accentListOrange}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li><b>Создание централизованной платформы</b> для управления всеми HR-процессами агрокомплекса</li>
              <li><b>Автоматизация рутинных операций</b> (расчет зарплат, учет времени, формирование отчетов)</li>
              <li><b>Внедрение ML-алгоритмов</b> для прогнозирования урожайности и оптимизации распределения ресурсов</li>
              <li><b>Повышение прозрачности и эффективности</b> управления персоналом</li>
              <li><b>Создание основы для масштабирования</b> решения на другие сельскохозяйственные предприятия</li>
            </ul>
          </div>
        </motion.div>
        {divider}
        {/* Целевая аудитория */}
        <motion.div {...blockAnim}>
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-6 w-6 text-teal-600" />
            <h2 className="text-2xl md:text-2xl font-bold text-teal-700">Целевая аудитория</h2>
          </div>
          <div className={accentList}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li><b>HR-менеджеры</b> — основные пользователи для управления персоналом, расчета зарплат, формирования отчетов и ведения кадрового учета</li>
              <li><b>Руководители отделов</b> — для мониторинга производительности подчиненных, утверждения отпусков и контроля выполнения задач</li>
              <li><b>Сотрудники агрокомплекса</b> — для подачи заявлений, просмотра личных данных, расчетных листов и рабочих заданий</li>
              <li><b>Системные администраторы</b> — для технического обслуживания, резервного копирования и управления инфраструктурой</li>
              <li><b>Руководство агрокомплекса</b> — для получения аналитических отчетов и принятия стратегических решений</li>
            </ul>
          </div>
        </motion.div>
        {divider}
        {/* Задачи системы */}
        <motion.div {...blockAnim}>
          <div className="flex items-center gap-2 mb-3">
            <ClipboardList className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl md:text-2xl font-bold text-teal-700">Задачи системы</h2>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Функциональные задачи:</h3>
          <div className={accentList}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              <li>Автоматизация полного цикла учета сотрудников (прием, перевод, увольнение)</li>
              <li>Расчет заработной платы с учетом премий, надбавок и удержаний</li>
              <li>Интеграция с банковскими API для автоматизации выплат</li>
              <li>Мониторинг производительности сотрудников через систему KPI</li>
              <li>GPS-мониторинг полевых работ и отслеживание техники</li>
              <li>ML-анализ для прогнозирования урожайности и оптимизации ресурсов</li>
              <li>Формирование отчетности для налоговых органов и управленческого учета</li>
              <li>Управление заявлениями сотрудников (отпуска, больничные, командировки)</li>
            </ul>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1 mt-4">Нефункциональные задачи:</h3>
          <div className={accentListBlue}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>Обеспечение производительности системы для <b>500+ одновременных пользователей</b></li>
              <li>Гарантия безопасности данных в соответствии с требованиями <b>ФЗ-152</b></li>
              <li>Масштабируемость архитектуры для расширения на другие предприятия</li>
              <li>Надежность системы с коэффициентом доступности <b>99.5%</b></li>
              <li>Совместимость с существующими информационными системами агрокомплекса</li>
            </ul>
          </div>
        </motion.div>
        {divider}
        {/* Техническое задание */}
        <motion.div {...blockAnim}>
          <div className="flex items-center gap-2 mb-3">
            <Settings2 className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl md:text-2xl font-bold text-teal-700">Техническое задание</h2>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Общие сведения:</h3>
          <div className={accentList}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              <li><b>Наименование системы:</b> SUpperHCM (Smart Upper Human Capital Management)</li>
              <li><b>Шифр проекта:</b> AGRO-HCM-2025</li>
              <li><b>Основание для разработки:</b> Потребность в комплексной автоматизации HR-процессов агрокомплекса</li>
              <li><b>Исполнитель:</b> Команда разработки SUpperHCM</li>
              <li><b>Сроки реализации:</b> Январь 2025 - Март 2026</li>
            </ul>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Технические требования к системе:</h3>
          <div className={accentListBlue}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              <li>Веб-платформа на базе <b>Django (Python)</b> с <b>React-интерфейсом</b></li>
              <li>База данных <b>PostgreSQL</b> с репликацией для обеспечения надежности</li>
              <li>ML-модуль на <b>TensorFlow</b> для анализа данных и прогнозирования</li>
              <li><b>RESTful API</b> для интеграции с внешними системами</li>
              <li>Мобильное приложение для сотрудников (<b>React Native</b>)</li>
            </ul>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Технико-экономические требования:</h3>
          <div className={accentListOrange}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              <li>Снижение трудозатрат HR-отдела на <b>40%</b></li>
              <li>Сокращение времени на формирование отчетов в <b>10 раз</b></li>
              <li>Повышение точности расчета зарплат до <b>99.9%</b></li>
              <li>Экономия бюджета на HR-процессы до <b>30% в год</b></li>
            </ul>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Требования к обеспечению:</h3>
          <div className={accentList}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              <li><b>Программное обеспечение:</b> Linux-серверы, Docker-контейнеризация</li>
              <li><b>Техническое обеспечение:</b> Серверная инфраструктура с резервированием</li>
              <li><b>Методическое обеспечение:</b> Документация пользователя и администратора</li>
              <li><b>Организационное обеспечение:</b> План обучения персонала</li>
            </ul>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Специальные требования:</h3>
          <div className={accentListBlue}>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              <li>Соответствие требованиям <b>ФЗ-152 "О персональных данных"</b></li>
              <li>Защита от несанкционированного доступа (двухфакторная аутентификация)</li>
              <li>Автоматическое резервное копирование данных каждые 4 часа</li>
              <li>Интеграция с существующей IT-инфраструктурой агрокомплекса</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Description; 