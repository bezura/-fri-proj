import { motion } from "framer-motion";
import { Users, Calendar, MapPin } from "lucide-react";

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
              Система управления внутренними ресурсами персонала (HCM) в агрокомплексе
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
                Авторы: <span className="text-teal-700">Чесноков Артемий, Хрусталев Влад</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-700 to-teal-500"></div>
    </header>
  );
};

export default Header; 