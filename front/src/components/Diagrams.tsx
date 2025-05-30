"use client"

import { motion } from "framer-motion"
import { GitBranch } from 'lucide-react'
import Diagram from "./Diagram"
import {
  activityMermaidDiagram,
  classMermaidDiagram,
  ComponentMermaidDiagram,
  deploymentDiagram,
  packageMermaidDiagram,
  sequenceMermaidDiagram,
  stateMermaidDiagram,
  temporaryMermaidDiagram,
  useCaseMermaidDiagram,
} from "../mermaid"
// import mermaid from "mermaid"

const Diagrams = () => {
  return (
    <section className="mb-20 px-4 max-w-5xl mx-auto relative z-1">
      <div className="relative mb-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-orange-500"
        />

        <div className="flex items-center gap-3 mb-2">
          <div className="bg-teal-100 p-2 rounded-lg">
            <GitBranch className="h-6 w-6 text-teal-700" />
          </div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-3xl font-bold text-teal-700"
          >
            Диаграммы системы
          </motion.h1>
        </div>
      </div>

      <Diagram
        name="Диаграмма вариантов использования (Use Case Diagram)"
        description="Диаграмма вариантов использования показывает взаимодействие между акторами (пользователями системы) и функциями системы. Она помогает определить основные функциональные требования к системе."
        mermaidCode={useCaseMermaidDiagram}
      />
      <Diagram
        name="Временная диаграмма (Sequence Diagram)"
        description="Временная диаграмма показывает последовательность взаимодействий между объектами системы во времени. Эта диаграмма иллюстрирует процесс расчета и выплаты заработной платы."
        mermaidCode={temporaryMermaidDiagram}
      />
      <Diagram
        name="Диаграмма компонентов (Component Diagram)"
        description="Диаграмма компонентов показывает организацию и зависимости между компонентами системы. Она помогает понять архитектуру системы на высоком уровне."
        mermaidCode={ComponentMermaidDiagram}
      />
      <Diagram
        name="Диаграмма последовательности (Sequence Diagram)"
        description="Диаграмма последовательности показывает поток взаимодействий между объектами системы для выполнения конкретного сценария. Эта диаграмма иллюстрирует процесс авторизации и работы с системой."
        mermaidCode={sequenceMermaidDiagram}
      />
      <Diagram
        name="Диаграмма классов (Class Diagram)"
        description="Диаграмма классов показывает структуру системы, включая классы, их атрибуты, методы и отношения между ними. Это ключевая диаграмма для проектирования объектно-ориентированных систем."
        mermaidCode={classMermaidDiagram}
      />
      <Diagram
        name="Диаграмма состояний (State Diagram)"
        description="Диаграмма состояний показывает жизненный цикл объекта и различные состояния, через которые он проходит в ответ на события. Эта диаграмма иллюстрирует состояния сотрудника, задания по сбору урожая, зарплаты и ML-модели."
        mermaidCode={stateMermaidDiagram}
      />
      <Diagram
        name="Диаграмма развертывания (Deployment Diagram)"
        description="Диаграмма развертывания показывает физическую архитектуру системы, включая серверы, устройства и соединения между ними. Эта диаграмма иллюстрирует инфраструктуру HCM-системы агрокомплекса."
        mermaidCode={deploymentDiagram}
      />
      <Diagram
        name="Диаграмма пакетов (Package Diagram)"
        description="Диаграмма пакетов показывает организацию кода на уровне модулей и пакетов, а также зависимости между ними. Эта диаграмма иллюстрирует структуру проекта системы управления персоналом."
        mermaidCode={packageMermaidDiagram}
      />
      <Diagram
        name="Диаграмма активности (Activity Diagram)"
        description="Диаграмма активности показывает поток процессов в системе, включая принятие решений и параллельные процессы. Эта диаграмма иллюстрирует основные рабочие процессы в HCM-системе."
        mermaidCode={activityMermaidDiagram}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-3">Обозначения на диаграмме:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-teal-700 mb-2">Действующие лица:</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>HR-менеджер - управление персоналом и зарплатами</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>Администратор системы - управление доступом</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>Руководитель отдела - контроль производительности</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>Сотрудник - доступ к личным данным</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span>Системный администратор - техническое обслуживание</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-orange-600 mb-2">Основные варианты использования:</h4>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>Управление сотрудниками и учетными записями</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>Расчет зарплаты и учет посещаемости</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>Прогнозирование урожая с помощью ML</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>Интеграция с внешними системами</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Diagrams
