import { Link, useLocation } from "react-router";

const sections = [
  { id: "intro", label: "Введение" },
  { id: "description", label: "Описание" },
  { id: "timeline", label: "Этапы" },
  { id: "swot", label: "SWOT-анализ" },
  { id: "fourp", label: "4P-анализ" },
  { id: "diagrams", label: "Диаграммы" },
];

export default function DocsNav() {
  const location = useLocation();
  return (
    <nav className="sticky top-4 z-10 mb-8 flex gap-2 flex-wrap justify-center md:justify-start">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={`/docs/${section.id}`}
          className={`px-3 py-1 rounded text-teal-700 hover:bg-teal-100 transition-colors text-sm font-medium border border-teal-100 ${location.pathname === `/docs/${section.id}` ? 'bg-teal-100' : ''}`}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
} 