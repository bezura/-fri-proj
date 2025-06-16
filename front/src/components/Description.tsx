import { motion } from "framer-motion";
import { FileText, Target, Users, ClipboardList, Settings2 } from "lucide-react";

const Description = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-16 px-4 max-w-4xl mx-auto"
    >
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden space-y-10">
        {/* Цель проекта */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-5 w-5 text-orange-600" />
            <h2 className="text-2xl font-semibold text-teal-700">Цель проекта</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-2">
            Проект представляет собой разработку <b>интегрированной системы управления персоналом (HCM)</b> для агрокомплекса с применением современных технологий машинного обучения.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><b>Создание централизованной платформы</b> для управления всеми HR-процессами агрокомплекса</li>
            <li><b>Автоматизация рутинных операций</b> (расчет зарплат, учет времени, формирование отчетов)</li>
            <li><b>Внедрение ML-алгоритмов</b> для прогнозирования урожайности и оптимизации распределения ресурсов</li>
            <li><b>Повышение прозрачности и эффективности</b> управления персоналом</li>
            <li><b>Создание основы для масштабирования</b> решения на другие сельскохозяйственные предприятия</li>
          </ul>
        </div>
        {/* Целевая аудитория */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-teal-600" />
            <h2 className="text-2xl font-semibold text-teal-700">Целевая аудитория</h2>
          </div>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><b>HR-менеджеры</b> — основные пользователи для управления персоналом, расчета зарплат, формирования отчетов и ведения кадрового учета</li>
            <li><b>Руководители отделов</b> — для мониторинга производительности подчиненных, утверждения отпусков и контроля выполнения задач</li>
            <li><b>Сотрудники агрокомплекса</b> — для подачи заявлений, просмотра личных данных, расчетных листов и рабочих заданий</li>
            <li><b>Системные администраторы</b> — для технического обслуживания, резервного копирования и управления инфраструктурой</li>
            <li><b>Руководство агрокомплекса</b> — для получения аналитических отчетов и принятия стратегических решений</li>
          </ul>
        </div>
        {/* Задачи системы */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ClipboardList className="h-5 w-5 text-orange-600" />
            <h2 className="text-2xl font-semibold text-teal-700">Задачи системы</h2>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Функциональные задачи:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
            <li>Автоматизация полного цикла учета сотрудников (прием, перевод, увольнение)</li>
            <li>Расчет заработной платы с учетом премий, надбавок и удержаний</li>
            <li>Интеграция с банковскими API для автоматизации выплат</li>
            <li>Мониторинг производительности сотрудников через систему KPI</li>
            <li>GPS-мониторинг полевых работ и отслеживание техники</li>
            <li>ML-анализ для прогнозирования урожайности и оптимизации ресурсов</li>
            <li>Формирование отчетности для налоговых органов и управленческого учета</li>
            <li>Управление заявлениями сотрудников (отпуска, больничные, командировки)</li>
          </ul>
          <h3 className="font-semibold text-teal-700 mb-1">Нефункциональные задачи:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Обеспечение производительности системы для <b>500+ одновременных пользователей</b></li>
            <li>Гарантия безопасности данных в соответствии с требованиями <b>ФЗ-152</b></li>
            <li>Масштабируемость архитектуры для расширения на другие предприятия</li>
            <li>Надежность системы с коэффициентом доступности <b>99.5%</b></li>
            <li>Совместимость с существующими информационными системами агрокомплекса</li>
          </ul>
        </div>
        {/* Техническое задание */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Settings2 className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-semibold text-teal-700">Техническое задание</h2>
          </div>
          <h3 className="font-semibold text-teal-700 mb-1">Общие сведения:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
            <li><b>Наименование системы:</b> SUpperHCM (Smart Upper Human Capital Management)</li>
            <li><b>Шифр проекта:</b> AGRO-HCM-2025</li>
            <li><b>Основание для разработки:</b> Потребность в комплексной автоматизации HR-процессов агрокомплекса</li>
            <li><b>Исполнитель:</b> Команда разработки SUpperHCM</li>
            <li><b>Сроки реализации:</b> Январь 2025 - Март 2026</li>
          </ul>
          <h3 className="font-semibold text-teal-700 mb-1">Технические требования к системе:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
            <li>Веб-платформа на базе <b>Django (Python)</b> с <b>React-интерфейсом</b></li>
            <li>База данных <b>PostgreSQL</b> с репликацией для обеспечения надежности</li>
            <li>ML-модуль на <b>TensorFlow</b> для анализа данных и прогнозирования</li>
            <li><b>RESTful API</b> для интеграции с внешними системами</li>
            <li>Мобильное приложение для сотрудников (<b>React Native</b>)</li>
          </ul>
          <h3 className="font-semibold text-teal-700 mb-1">Технико-экономические требования:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
            <li>Снижение трудозатрат HR-отдела на <b>40%</b></li>
            <li>Сокращение времени на формирование отчетов в <b>10 раз</b></li>
            <li>Повышение точности расчета зарплат до <b>99.9%</b></li>
            <li>Экономия бюджета на HR-процессы до <b>30% в год</b></li>
          </ul>
          <h3 className="font-semibold text-teal-700 mb-1">Требования к обеспечению:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
            <li><b>Программное обеспечение:</b> Linux-серверы, Docker-контейнеризация</li>
            <li><b>Техническое обеспечение:</b> Серверная инфраструктура с резервированием</li>
            <li><b>Методическое обеспечение:</b> Документация пользователя и администратора</li>
            <li><b>Организационное обеспечение:</b> План обучения персонала</li>
          </ul>
          <h3 className="font-semibold text-teal-700 mb-1">Специальные требования:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Соответствие требованиям <b>ФЗ-152 "О персональных данных"</b></li>
            <li>Защита от несанкционированного доступа (двухфакторная аутентификация)</li>
            <li>Автоматическое резервное копирование данных каждые 4 часа</li>
            <li>Интеграция с существующей IT-инфраструктурой агрокомплекса</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Description; 