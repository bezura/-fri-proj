import { motion } from "framer-motion";
import { GitBranch, Info, Maximize2, X, ZoomIn, ZoomOut, RefreshCw } from "lucide-react";
import mermaid from "mermaid";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

export type DiagramProps = {
  name: string;
  description: string;
  mermaidCode: string;
};

const Diagram = ({name, description, mermaidCode}: DiagramProps) => {
  const [diagramRendered, setDiagramRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{x: number, y: number} | null>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  // const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgHtml, setSvgHtml] = useState<string | null>(null);

  useEffect(() => {
    // Intersection Observer для ленивой загрузки
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (diagramRef.current) observer.unobserve(diagramRef.current);
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );
    if (diagramRef.current) observer.observe(diagramRef.current);
    return () => { if (diagramRef.current) observer.unobserve(diagramRef.current); };
  }, []);

  useEffect(() => {
    if (isVisible && !diagramRendered) {
      try {
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

  // Рендерим диаграмму в svg через mermaid.render
  useEffect(() => {
    if (isVisible && !svgHtml) {
      let cancelled = false;
      mermaid.parse(mermaidCode); // Проверка синтаксиса
      mermaid.render(`diagram-${Math.random().toString(36).slice(2)}`, mermaidCode).then(({svg}) => {
        if (!cancelled) setSvgHtml(svg);
      }).catch(() => setSvgHtml(null));
      return () => { cancelled = true; };
    }
  }, [isVisible, mermaidCode, svgHtml]);

  // Фуллскрин: повторно рендерим svg
  useEffect(() => {
    if (fullscreen) {
      setSvgHtml(null); // сбросить, чтобы показать лоадер
      setTimeout(() => {
        mermaid.parse(mermaidCode);
        mermaid.render(`diagram-fullscreen-${Math.random().toString(36).slice(2)}`, mermaidCode).then(({svg}) => {
          setSvgHtml(svg);
        });
      }, 100);
      document.body.classList.add('diagram-fullscreen-open');
    } else {
      setZoom(1); setPan({x:0,y:0});
      document.body.classList.remove('diagram-fullscreen-open');
    }
  }, [fullscreen, mermaidCode]);

  // Drag-to-pan обработчики
  function onSvgMouseDown(e: React.MouseEvent) {
    if (!fullscreen) return;
    setDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }
  function onSvgMouseMove(e: React.MouseEvent) {
    if (!fullscreen || !dragging || !dragStart) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  }
  function onSvgMouseUp() { setDragging(false); setDragStart(null); }
  function onSvgWheel(e: React.WheelEvent) {
    if (!fullscreen) return;
    e.preventDefault();
    setZoom(z => Math.max(0.2, Math.min(3, z - e.deltaY * 0.001)));
  }

  // Кнопки зума
  function handleZoomIn() { setZoom(z => Math.min(3, z + 0.2)); }
  function handleZoomOut() { setZoom(z => Math.max(0.2, z - 0.2)); }
  function handleZoomReset() { setZoom(1); setPan({x:0,y:0}); }

  // Фуллскрин overlay
  const fullscreenOverlay = (
    <AnimatePresence>
      {fullscreen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ background: 'rgba(0,0,0,0.6)' }}
        >
          <div className="absolute top-0 left-0 w-full h-full" onClick={() => setFullscreen(false)} aria-label="Закрыть диаграмму" />
          {!svgHtml && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="flex items-center justify-center bg-white rounded-xl shadow-2xl p-8 max-w-full max-h-full w-[95vw] h-[90vh]"
            >
              <div className="text-gray-400 text-lg">Загрузка диаграммы...</div>
            </motion.div>
          )}
          {svgHtml && (
            <motion.div
              className="relative bg-white rounded-xl shadow-2xl p-4 max-w-full max-h-full w-[95vw] h-[90vh] flex flex-col mermaid-fullscreen"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-teal-600" />
                  <span className="text-lg font-semibold text-gray-800">{name}</span>
                </div>
                <button className="p-2 rounded hover:bg-gray-100" onClick={() => setFullscreen(false)} aria-label="Закрыть"><X className="w-6 h-6" /></button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button className="p-2 rounded hover:bg-teal-50" onClick={handleZoomIn} aria-label="Приблизить"><ZoomIn className="w-5 h-5" /></button>
                <button className="p-2 rounded hover:bg-teal-50" onClick={handleZoomOut} aria-label="Отдалить"><ZoomOut className="w-5 h-5" /></button>
                <button className="p-2 rounded hover:bg-teal-50" onClick={handleZoomReset} aria-label="Сбросить зум"><RefreshCw className="w-5 h-5" /></button>
                <span className="ml-2 text-gray-500 text-xs">Масштаб: {(zoom*100).toFixed(0)}%</span>
              </div>
              <div className="flex-1 overflow-auto bg-white rounded border border-gray-100 flex items-center justify-center">
                <div
                  style={{ width: '100%', height: '100%', cursor: dragging ? 'grabbing' : 'grab' }}
                  onMouseDown={onSvgMouseDown}
                  onMouseMove={onSvgMouseMove}
                  onMouseUp={onSvgMouseUp}
                  onMouseLeave={onSvgMouseUp}
                  onWheel={onSvgWheel}
                >
                  <div
                    className="mermaid"
                    style={{
                      transform: `scale(${zoom}) translate(${pan.x/zoom}px,${pan.y/zoom}px)`,
                      transformOrigin: '0 0',
                      transition: dragging ? 'none' : 'transform 0.2s',
                      minWidth: 600,
                      minHeight: 400,
                    }}
                    dangerouslySetInnerHTML={{ __html: svgHtml }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.div
      ref={diagramRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8"
    >
      <div className="border-b border-gray-100 bg-gray-50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GitBranch className="h-5 w-5 text-teal-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            {name}
          </h2>
        </div>
        <button
          className="p-2 rounded hover:bg-teal-50"
          onClick={() => setFullscreen(true)}
          aria-label="На весь экран"
        >
          <Maximize2 className="w-5 h-5 text-teal-700" />
        </button>
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
          animate={{ opacity: svgHtml ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mermaid-container overflow-x-auto"
        >
          {isVisible && svgHtml ? (
            <div
              className="mermaid bg-white p-4 rounded-lg min-w-full"
              dangerouslySetInnerHTML={{ __html: svgHtml }}
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-50 rounded-lg min-h-[120px] text-gray-400" style={{ minHeight: 120 }}>
              Загрузка диаграммы...
            </div>
          )}
        </motion.div>
      </div>
      {fullscreenOverlay}
    </motion.div>
  );
};

export default Diagram;