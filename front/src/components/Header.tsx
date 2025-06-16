import { motion } from "framer-motion";
import { Users, CheckCircle, Zap, Star, Code, User } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    title: "Автоматизация HR-процессов",
    desc: "Система автоматизирует учет сотрудников, расчёт зарплат, контроль посещаемости и многое другое."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-teal-600" />,
    title: "Интеграция с ML и IoT",
    desc: "Внедрение машинного обучения для прогнозирования урожая и IoT-устройств для мониторинга полей."
  },
  {
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    title: "Гибкая архитектура",
    desc: "Модульная структура позволяет легко масштабировать и интегрировать систему с внешними сервисами."
  },
  {
    icon: <Code className="h-6 w-6 text-blue-500" />,
    title: "Современные технологии",
    desc: "React, Django, TensorFlow, PostgreSQL — всё для высокой производительности и безопасности."
  },
];

const advantages = [
  "Снижение бюрократии и ошибок за счёт автоматизации",
  "Ускорение бизнес-процессов и повышение прозрачности",
  "Возможность аналитики и прогнозирования на основе данных",
  "Интуитивный и красивый интерфейс для всех пользователей",
  "Безопасное хранение и обработка данных"
];

const developers = [
  {
    name: "Хрусталев Влад Николаевич",
    img: "/author/author1.jpg",
    role: "Fullstack-разработчик, архитектор",
    desc: "Разработка архитектуры, backend, интеграция ML и API."
  },
  {
    name: "Чесноков Артемий Павлович",
    img: "/author/author2.jpg",
    role: "Frontend-разработчик, UI/UX",
    desc: "Дизайн интерфейса, frontend, UX, документация."
  }
];

const Header = () => {
  return (
    <header className="relative py-12 px-4 mb-12 overflow-hidden bg-gradient-to-r from-white to-teal-50 bg-white/80 backdrop-blur rounded-xl shadow p-6">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />
      <div className="max-w-4xl mx-auto relative">
        {/* Обзор проекта */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-teal-700 p-3 rounded-lg text-white shadow-lg">
              <Users size={32} />
            </div>
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-gray-800">
            HCM-система для агрокомплекса (SUpperHCM)
            </h1>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl">
          Проект представляет из себя систему управления внутренними ресурсами персонала (HCM) предназначенную для агрокомплексов, чтобы оптимизировать HR-процессы, автоматизировать учет сотрудников и внедрить передовые технологии. Используя машинное обучение для анализа данных и прогнозирования урожая, а также IoT-устройства для мониторинга полей, мы повышаем эффективность и прозрачность управления.
          </p>
        </motion.div>

        {/* Основные функции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="font-sans text-2xl font-semibold text-teal-700 mb-4">Основные функции системы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/80 rounded-xl shadow p-4 border border-teal-50">
                <div>{f.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="font-sans text-2xl font-semibold text-teal-700 mb-4">Преимущества нашей системы</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {advantages.map((adv, i) => (
              <li key={i}>{adv}</li>
            ))}
          </ul>
        </motion.div>

        {/* О разработчиках */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="font-sans text-2xl font-semibold text-teal-700 mb-6">О разработчиках</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {developers.map((dev, i) => (
              <div key={i} className="flex-1 bg-white/90 rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg border-4 border-teal-100"
                  loading="lazy"
                />
                <h3 className="font-bold text-lg text-gray-800 mb-1 flex items-center gap-2"><User className="h-5 w-5 text-teal-600" />{dev.name}</h3>
                <p className="text-teal-700 font-medium mb-1">{dev.role}</p>
                <p className="text-gray-600 text-sm">{dev.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-700 to-teal-500"></div>
    </header>
  );
};

export default Header; 