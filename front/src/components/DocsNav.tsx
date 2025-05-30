import { Link, useLocation, useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import { useCallback } from "react";

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
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("registered");
    navigate("/login", { replace: true });
    window.location.reload();
  }, [navigate]);

  return (
    <nav className="sticky top-4 z-10 mb-8 flex gap-2 flex-wrap justify-center md:justify-start items-center">
      <div className="flex gap-2 flex-wrap">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={`/docs/${section.id}`}
            className={`px-3 py-1 rounded text-teal-700 hover:bg-teal-100 transition-colors text-sm font-medium border border-teal-100 ${location.pathname === `/docs/${section.id}` ? 'bg-teal-100' : ''}`}
          >
            {section.label}
          </Link>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="ml-auto flex items-center gap-1 px-3 py-1 rounded text-red-700 border border-red-100 hover:bg-red-50 transition-colors text-sm font-medium"
        title="Выйти"
        type="button"
      >
        <LogOut className="w-4 h-4" /> Выйти
      </button>
    </nav>
  );
} 