import { useRef, useEffect, useState } from "react";
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

export default function DocsAllInOne() {
  const sectionRefs = {
    // intro: useRef<HTMLDivElement>(null),
    description: useRef<HTMLDivElement>(null),
    timeline: useRef<HTMLDivElement>(null),
    swot: useRef<HTMLDivElement>(null),
    fourp: useRef<HTMLDivElement>(null),
    diagrams: useRef<HTMLDivElement>(null),
    techarch: useRef<HTMLDivElement>(null),
    visualization: useRef<HTMLDivElement>(null),
    conclusion: useRef<HTMLDivElement>(null),
  };
  const [active, setActive] = useState("description");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const ref = sectionRefs[id as keyof typeof sectionRefs].current;
        if (!ref) return { id, top: Infinity };
        const rect = ref.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - 80) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const ref = sectionRefs[id as keyof typeof sectionRefs].current;
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-800 font-['Roboto']">
      <PageBackground pageId="docs-all" />
      <div className="flex max-w-7xl mx-auto pt-8">
        {/* Вертикальное меню */}
        <nav className="hidden md:flex flex-col gap-2 sticky top-25 h-fit min-w-[200px] mr-8 z-20 ">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-left px-4 py-2 rounded transition-colors font-medium text-sm border border-teal-100 hover:bg-teal-50 ${active === s.id ? "bg-teal-100 text-teal-800 font-bold" : "text-teal-700"}`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        {/* Контент */}
        <div className="flex-1 min-w-0">
          {/* <div ref={sectionRefs.intro} id="intro"><Header /></div> */}
          <div ref={sectionRefs.description} id="description"><Description /></div>
          <div ref={sectionRefs.timeline} id="timeline"><Timeline /></div>
          <div ref={sectionRefs.swot} id="swot"><SwotTable /></div>
          <div ref={sectionRefs.fourp} id="fourp"><FourPTable /></div>
          <div ref={sectionRefs.diagrams} id="diagrams"><Diagrams /></div>
          <div ref={sectionRefs.techarch} id="techarch"><TechnicalArchitectureSection /></div>
          <div ref={sectionRefs.visualization} id="visualization"><ProjectVisualizationSection /></div>
          <div ref={sectionRefs.conclusion} id="conclusion"><ConclusionSection /></div>
        </div>
      </div>
    </div>
  );
} 