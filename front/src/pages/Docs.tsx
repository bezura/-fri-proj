import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Diagrams from "@/components/Diagrams";
import Diagram from "@/components/Diagram";
import mermaid from "mermaid";
import DocsNav from "@/components/DocsNav";
import Header from "@/components/Header";
import Description from "@/components/Description";
import Timeline from "@/components/Timeline";
import SwotTable from "@/components/SwotTable";
import FourPTable from "@/components/FourPTable";
import Footer from "@/components/Footer";
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
} from "@/mermaid";

export const DocsContent: React.FC = () => {
  const [diagramsLoaded, setDiagramsLoaded] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true, 
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis",
      },
      securityLevel: "sandbox",
      theme: "default",
      themeVariables: {
        width: "100%",
        height: "400px",
      },
      look: "handDrawn",
    });
  }, []);
  useEffect(() => {
    setDiagramsLoaded(true);
  }, []);
  return (
    <div className="relative mx-auto p-6 bg-white text-gray-800 font-['Roboto']">
      <DocsNav />
      <div id="header"><Header /></div>
      <div id="description"><Description /></div>
      <div id="timeline"><Timeline /></div>
      <div id="swot"><SwotTable /></div>
      <div id="fourp"><FourPTable /></div>
      {diagramsLoaded && (
        <div id="diagrams">
          <Diagrams>
            <Diagram
              name="Диаграмма вариантов использования (Use Case Diagram)"
              description="Диаграмма вариантов использования показывает взаимодействие между\n      акторами (пользователями системы) и функциями системы. Она помогает\n      определить основные функциональные требования к системе."
              mermaidCode={useCaseMermaidDiagram}
            />
            <Diagram
              name="Временная диаграмма (Sequence Diagram)"
              description="Временная диаграмма показывает последовательность взаимодействий между объектами системы во времени.\n     Эта диаграмма иллюстрирует процесс расчета и выплаты заработной платы."
              mermaidCode={temporaryMermaidDiagram}
            />
            <Diagram
              name="Диаграмма компонентов (Component Diagram)"
              description="Диаграмма компонентов показывает организацию и зависимости между компонентами системы.\n     Она помогает понять архитектуру системы на высоком уровне."
              mermaidCode={ComponentMermaidDiagram}
            />
            <Diagram
              name="Диаграмма последовательности (Sequence Diagram)"
              description="Диаграмма последовательности показывает поток взаимодействий между объектами системы для выполнения конкретного сценария. \n    Эта диаграмма иллюстрирует процесс авторизации и работы с системой."
              mermaidCode={sequenceMermaidDiagram}
            />
            <Diagram
              name="Диаграмма классов (Class Diagram)"
              description="Диаграмма классов показывает структуру системы, включая классы, их атрибуты, методы и отношения между ними.\n     Это ключевая диаграмма для проектирования объектно-ориентированных систем."
              mermaidCode={classMermaidDiagram}
            />
            <Diagram
              name="Диаграмма состояний (State Diagram)"
              description="Диаграмма состояний показывает жизненный цикл объекта и различные состояния, через которые он проходит в ответ на события. \n    Эта диаграмма иллюстрирует состояния сотрудника, задания по сбору урожая, зарплаты и ML-модели."
              mermaidCode={stateMermaidDiagram}
            />
            <Diagram
              name="Диаграмма развертывания (Deployment Diagram)"
              description="Диаграмма развертывания показывает физическую архитектуру системы, включая серверы, устройства и соединения между ними. \n    Эта диаграмма иллюстрирует инфраструктуру HCM-системы агрокомплекса."
              mermaidCode={deploymentDiagram}
            />
            <Diagram
              name="Диаграмма пакетов (Package Diagram)"
              description="Диаграмма пакетов показывает организацию кода на уровне модулей и пакетов, а также зависимости между ними. \n    Эта диаграмма иллюстрирует структуру проекта системы управления персоналом."
              mermaidCode={packageMermaidDiagram}
            />
            <Diagram
              name="Диаграмма активности (Activity Diagram)"
              description="Диаграмма активности показывает поток процессов в системе, включая принятие решений и параллельные процессы. \n    Эта диаграмма иллюстрирует основные рабочие процессы в HCM-системе."
              mermaidCode={activityMermaidDiagram}
            />
          </Diagrams>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default function Docs() {
  const navigate = useNavigate();

  useEffect(() => {
    const registered = localStorage.getItem("registered");
    if (!registered) {
      navigate("/register", { replace: true });
    }
  }, [navigate]);

  return <DocsContent />;
}
