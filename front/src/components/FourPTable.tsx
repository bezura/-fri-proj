import { motion } from "framer-motion";
import { Package, DollarSign, MapPin, Megaphone } from "lucide-react";
import Table, { type TableRowData } from "@/components/Table";

const fourPData: TableRowData[] = [
  {
    key: "product",
    title: "Продукт",
    items: [
      "Интегрированная система управления персоналом (HCM)",
      "Автоматизация учета сотрудников, расчета зарплат и мониторинга работы",
      "ML-модель для предсказания сбора урожая и оптимизации ресурсов",
      "Веб-портал для сотрудников и мобильное приложение",
    ],
    color: "teal",
  },
  {
    key: "price",
    title: "Цена",
    items: [
      "Первоначальные затраты на разработку (около 5-10 млн руб.)",
      "Экономия за счет автоматизации (снижение затрат на HR и управленческий персонал)",
      "Стоимость внедрения в другие агрохолдинги (если систему решат продавать)",
    ],
    color: "orange",
  },
  {
    key: "place",
    title: "Место",
    items: [
      "Использование в агрокомплексе для внутреннего управления",
      "Возможность расширения на другие сельхозпредприятия (продажа франшизы или SaaS-модели)",
      "Доступность системы через веб и мобильное приложение",
    ],
    color: "blue",
  },
  {
    key: "promotion",
    title: "Продвижение",
    items: [
      "Внутреннее обучение сотрудников агрокомплекса",
      "Демонстрация эффективности системы через кейсы",
      "Возможность привлечения инвесторов для дальнейшего развития",
      "Маркетинговая кампания (если будет решено продавать систему другим компаниям)",
    ],
    color: "red",
  },
];

const FourPTable = () => {
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
            <div className="flex space-x-1">
              <Package className="h-5 w-5 text-teal-700" />
              <DollarSign className="h-5 w-5 text-orange-600" />
            </div>
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-bold text-teal-700"
          >
            4P анализ
          </motion.h1>
        </div>
      </div>
      <Table
        headers={{
          col1: "Фактор",
          col2: "Описание",
        }}
        rows={fourPData}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 flex flex-wrap gap-4 justify-center text-sm"
      >
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-teal-600" />
          <span className="text-gray-700">Product (Продукт)</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-orange-600" />
          <span className="text-gray-700">Price (Цена)</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span className="text-gray-700">Place (Место)</span>
        </div>
        <div className="flex items-center gap-2">
          <Megaphone className="h-4 w-4 text-red-600" />
          <span className="text-gray-700">Promotion (Продвижение)</span>
        </div>
      </motion.div>
    </section>
  );
};

export default FourPTable; 