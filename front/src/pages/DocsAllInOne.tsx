import { useState, useEffect } from "react";
// import Header from "@/components/Header";
import Description from "@/components/Description";
import Timeline from "@/components/Timeline";
import SwotTable from "@/components/SwotTable";
import FourPTable from "@/components/FourPTable";
import Diagrams from "@/components/Diagrams";
import TechnicalArchitectureSection from "@/components/TechnicalArchitectureSection";
import ProjectVisualizationSection from "@/components/ProjectVisualizationSection";
import ConclusionSection from "@/components/ConclusionSection";
import { PageBackground } from "@/components/PageBackground";

const sections = [
//   { id: "intro", label: "Введение" },
  { id: "description", label: "Описание" },
  { id: "timeline", label: "Этапы" },
  { id: "swot", label: "SWOT-анализ" },
  { id: "fourp", label: "4P-анализ" },
  { id: "diagrams", label: "Диаграммы" },
  { id: "techarch", label: "Техническая архитектура" },
  { id: "visualization", label: "Визуализация данных" },
  { id: "conclusion", label: "Заключение" },
];

const sectionComponents: Record<string, React.ReactNode> = {
  description: <Description />,
  timeline: <Timeline />,
  swot: <SwotTable />,
  fourp: <FourPTable />,
  diagrams: <Diagrams />,
  techarch: <TechnicalArchitectureSection />,
  visualization: <ProjectVisualizationSection />,
  conclusion: <ConclusionSection />,
};

const STORAGE_KEY = "docs_active_section";

export default function DocsAllInOne() {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEY) || "description";
    }
    return "description";
  });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    localStorage.setItem(STORAGE_KEY, activeSection);
  }, [activeSection]);

  // UX: после выбора раздела меню сворачивается
  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    setExpanded(false);
  };

  return (
    <div className="relative min-h-screen text-gray-800 font-['Roboto']">
      <PageBackground pageId="docs-all" />
      <div className="flex max-w-7xl mx-auto pt-8">
        {/* Вертикальное меню (desktop) */}
        <nav className="hidden md:flex bg-white rounded-sm shadow border border-teal-50 p-2 flex-col gap-2 sticky top-25 h-fit min-w-[200px] mr-8 z-20 ">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`text-left px-4 py-2 rounded transition-colors font-medium text-sm border border-teal-100 hover:bg-teal-50 ${activeSection === s.id ? "bg-teal-100 text-teal-800 font-bold" : "text-teal-700"}`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        {/* Мобильное компактное меню */}
        <nav
   className={`md:hidden fixed z-40 flex flex-col justify-center items-center py-4 transition-all duration-300 left-0 top-0 bottom-0
               ${expanded ? "w-52" : "w-11"}`}
    style={{ minWidth: expanded ? 180 : 44, width: expanded ? 208 : 44, height: '100vh', overflow: 'hidden', transition: 'width 0.32s cubic-bezier(.4,0,.2,1), min-width 0.32s cubic-bezier(.4,0,.2,1)', position: 'fixed' }}
   aria-label="Меню разделов"
 >
           <div className="w-full flex flex-col items-center">
           {sections.map((s) => (
             <button
               key={s.id}
               onClick={() => expanded ? handleSectionClick(s.id) : setExpanded(true)}
               className={`bg-white/95 border-r border-teal-100 shadow-lg rounded-sm flex items-center w-full px-0 py-2 my-0.5 rounded-l transition-colors font-medium text-sm group ${activeSection === s.id ? "bg-teal-100 text-teal-800 font-bold" : "text-teal-700"}`}
               style={{ minHeight: 40 }}
               aria-current={activeSection === s.id ? "page" : undefined}
             >
               <span
                 className={`flex items-center justify-center w-9 h-9 rounded-full mx-1 transition-colors ${activeSection === s.id ? "bg-teal-500 text-white font-bold" : "bg-gray-100 text-teal-700"}`}
                 style={{ fontSize: 18 }}
               >
                 {s.label[0]}
               </span>
               {expanded && (
                 <span
                   className={`ml-2 truncate transition-opacity duration-200 ${activeSection === s.id ? 'font-bold' : 'font-normal'}`}
                   style={{ transitionDelay: expanded ? '0.18s' : '0s' }}
                 >
                   {s.label}
                 </span>
               )}
             </button>
           ))}
           </div>
           {/* Кнопка закрытия меню */}
           <div style={{ position: 'absolute', left: 0, right: 0, bottom: 16, display: expanded ? 'block' : 'none', pointerEvents: expanded ? 'auto' : 'none' }}>
             <button
               className="bg-white/95 border-r border-teal-100 shadow-lg rounded-sm mx-2 px-3 py-1 text-xs text-teal-700 bg-teal-50 rounded hover:bg-teal-100 border border-teal-100 transition-opacity duration-200 w-[90%]"
               style={{ transitionDelay: '0.18s', opacity: expanded ? 1 : 0 }}
               onClick={() => setExpanded(false)}
               aria-label="Свернуть меню"
             >
               ← Свернуть
             </button>
           </div>
         </nav>
        {/* Контент */}
        <div className="flex-1 min-w-0 pt-4 md:pt-4 w-full bg-white/80 rounded-xl shadow p-4 border border-teal-50" style={{ marginLeft: 44 }}>
          {/* <div ref={sectionRefs.intro} id="intro"><Header /></div> */}
          {sectionComponents[activeSection]}
        </div>
      </div>
      {/* Анимация для меню */}
      <style>{`
        @media (max-width: 767px) {
          nav[aria-label='Меню разделов'] { box-shadow: 2px 0 12px 0 #00897b11; transition: width 0.32s cubic-bezier(.4,0,.2,1), min-width 0.32s cubic-bezier(.4,0,.2,1); }
          nav[aria-label='Меню разделов'] .truncate { transition: opacity 0.2s; }
        }
        nav[aria-label='Меню разделов'],
        nav.sticky,
        nav.md\\flex,
        .change-bg-btn {
          transition: opacity 0.3s cubic-bezier(.4,0,.2,1);
        }
        body.diagram-fullscreen-open nav[aria-label='Меню разделов'],
        body.diagram-fullscreen-open nav.sticky,
        body.diagram-fullscreen-open nav.md\\flex,
        body.diagram-fullscreen-open .change-bg-btn {
          opacity: 0 !important;
          pointer-events: none !important;
        }
        body:not(.diagram-fullscreen-open) nav[aria-label='Меню разделов'],
        body:not(.diagram-fullscreen-open) nav.sticky,
        body:not(.diagram-fullscreen-open) nav.md\\flex,
        body:not(.diagram-fullscreen-open) .change-bg-btn {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
} 