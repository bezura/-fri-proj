"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

// Interface for table row data
export interface TableRowData {
  key: string
  title: string
  items: string[]
  color?: "teal" | "orange" | "blue" | "red" | "gray"
}

// Props for the Table component
interface TableProps {
  headers: {
    col1: string
    col2: string
  }
  rows: TableRowData[]
  className?: string
}

// Color variants for different row types
const colorVariants = {
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-700",
    icon: "text-teal-500",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-700",
    icon: "text-orange-500",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    icon: "text-blue-500",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    icon: "text-red-500",
  },
  gray: {
    bg: "bg-gray-50",
    border: "border-gray-200",
    text: "text-gray-700",
    icon: "text-gray-500",
  },
}

const Table = ({ headers, rows, className = "" }: TableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-4 px-4 text-left font-semibold text-gray-700 w-1/3">{headers.col1}</th>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">{headers.col2}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const colors = colorVariants[row.color || "gray"]

              return (
                <motion.tr
                  key={row.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + rowIndex * 0.1 }}
                  className="border-b border-gray-100"
                >
                  <td className={`py-4 px-4 ${colors.bg} font-medium ${colors.text} border-r border-gray-100`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-1 h-10 rounded-full ${colors.border}`}></div>
                      {row.title}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <ul className="space-y-2">
                      {row.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + rowIndex * 0.1 + index * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <ChevronRight className={`h-4 w-4 mt-1 flex-shrink-0 ${colors.icon}`} />
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default Table
