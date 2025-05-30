const sections = [
  { id: "header", label: "Введение" },
  { id: "description", label: "Описание" },
  { id: "timeline", label: "Этапы" },
  { id: "swot", label: "SWOT-анализ" },
  { id: "fourp", label: "4P-анализ" },
  { id: "diagrams", label: "Диаграммы" },
];

export default function DocsNav() {
  return (
    <nav className="sticky top-4 z-10 mb-8 flex gap-2 flex-wrap justify-center md:justify-start">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="px-3 py-1 rounded text-teal-700 hover:bg-teal-100 transition-colors text-sm font-medium border border-teal-100"
          style={{ scrollBehavior: "smooth" }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
} 