import { useEffect, useState } from "react";

export function PageBackground({ pageId }: { pageId: string }) {
  const [bg, setBg] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/bg/${pageId}`)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setBg(data.image))
      .catch(() => setBg(null));
  }, [pageId]);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/generate-bg`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, page: pageId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(`Ошибка генерации: ${data.error}`);
      setBg(data.image);
      setShowPrompt(false);
      setPrompt("");
    } catch (e: any) {
      setError(e.message || "Ошибка генерации");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {bg && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background: `url(data:image/jpeg;base64,${bg}) center/cover no-repeat`,
            filter: "blur(12px) brightness(0.7)",
            transition: "background 0.5s"
          }}
        />
      )}
      <button
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 20,
          background: "rgba(255,255,255,0.85)",
          border: "1px solid #eee",
          borderRadius: 8,
          padding: "10px 20px",
          fontWeight: 500,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          cursor: "pointer"
        }}
        onClick={() => setShowPrompt(true)}
      >
        Изменить фон данной страницы
      </button>
      {showPrompt && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100
        }}>
          <div style={{ background: "#fff", padding: 24, borderRadius: 12, minWidth: 320 }}>
            <h3 style={{ marginBottom: 12 }}>Введите промт для генерации фона</h3>
            <input
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Опиши желаемый фон"
              style={{ width: 260, padding: 8, borderRadius: 6, border: "1px solid #ddd", marginBottom: 12 }}
              disabled={loading}
            />
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={handleGenerate} disabled={loading || !prompt} style={{ padding: "8px 16px", borderRadius: 6, background: "#14b8a6", color: "#fff", border: "none", fontWeight: 500 }}>
                {loading ? "Генерируется..." : "Сгенерировать"}
              </button>
              <button disabled={loading} onClick={() => setShowPrompt(false)} style={{ padding: "8px 16px", borderRadius: 6, background: "#eee", border: "none" }}>Отмена</button>
            </div>
            {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
          </div>
        </div>
      )}
    </>
  );
} 