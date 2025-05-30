import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";
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
    </section>
  );
};

export default SwotTable; 