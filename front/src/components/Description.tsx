import { motion } from "framer-motion";
import { FileText, Target } from "lucide-react";

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
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-full opacity-70 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-50 rounded-full opacity-50" />
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
            Проект представляет собой разработку интегрированной системы управления персоналом (HCM) для агрокомплекса. Основная цель — оптимизация учета сотрудников, автоматизация бизнес-процессов и внедрение машинного обучения (ML) для анализа данных и автоматизации сбора урожая.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Description; 