import { motion } from "framer-motion";
import { GitBranch, Info } from "lucide-react";
import mermaid from "mermaid";
import { useEffect, useState, useRef } from "react";

export type DiagramProps = {
  name: string;
  description: string;
  mermaidCode: string;
};

const Diagram = ({name, description, mermaidCode}: DiagramProps) => {
  const [diagramRendered, setDiagramRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the diagram enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've seen it, we don't need to observe anymore
          if (diagramRef.current) {
            observer.unobserve(diagramRef.current);
          }
        }
      },
      {
        // Start rendering when the diagram is 200px from entering the viewport
        rootMargin: "200px 0px",
        threshold: 0.01,
      }
    );

    // Start observing the diagram container
    if (diagramRef.current) {
      observer.observe(diagramRef.current);
    }

    // Cleanup
    return () => {
      if (diagramRef.current) {
        observer.unobserve(diagramRef.current);
      }
    };
  }, []);

  // Only render the diagram once it becomes visible
  useEffect(() => {
    if (isVisible && !diagramRendered) {
      try {
        // Add small delay to ensure DOM is ready
        const timer = setTimeout(() => {
          mermaid.contentLoaded();
          setDiagramRendered(true);
        }, 100);
        
        return () => clearTimeout(timer);
      } catch (error) {
        console.error("Failed to render Mermaid diagram:", error);
      }
    }
  }, [isVisible, diagramRendered, mermaidCode]);

  return (
    <motion.div
      ref={diagramRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8"
    >
      <div className="border-b border-gray-100 bg-gray-50 p-4">
        <div className="flex items-center gap-3">
          <GitBranch className="h-5 w-5 text-teal-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            {name}
          </h2>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-gray-700">
            {description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: diagramRendered ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mermaid-container overflow-x-auto"
        >
          {isVisible && (
            <div
              className="mermaid bg-white p-4 rounded-lg min-w-full h-[400px]"
            >
              {mermaidCode}
            </div>
          )}
          {!isVisible && (
            <div className="flex items-center justify-center h-[400px] bg-gray-50 rounded-lg">
              <p className="text-gray-400">Диаграмма загружается при прокрутке...</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Diagram;