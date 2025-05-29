"use client"

import { type ReactElement } from "react"
import { motion } from "framer-motion"
import { GitBranch } from 'lucide-react'
// import mermaid from "mermaid"






type DiagramsProps = {
  children: ReactElement[]
 }

const Diagrams = ({children}: DiagramsProps) => {
  
  
  return (
    <section className="mb-20 px-4  mx-auto">
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
      {children}


      {/* <motion.div
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
      </motion.div> */}
    </section>
  )
}

export default Diagrams
