import { useEffect, useState } from "react";

function getTopKeywords(prompts: Record<string, number>, topN = 5) {
  const wordCounts: Record<string, number> = {};
  Object.entries(prompts || {}).forEach(([prompt, count]) => {
    prompt
      .toLowerCase()
      .replace(/[^a-zа-я0-9\s]/gi, " ")
      .split(/\s+/)
      .filter(w => w.length > 2)
      .forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + count;
      });
  });
  return Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN);
}

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/analytics`)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(setData)
      .catch(() => setError("Ошибка загрузки аналитики"))
      .finally(() => setLoading(false));
  }, []);

  const topKeywords = data ? getTopKeywords(data.prompts || {}) : [];

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-teal-700 bg-white/80 backdrop-blur rounded-xl shadow p-6">Аналитика</h1>
      {loading && <div>Загрузка...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {data && (
        <div className="space-y-8">
          <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Уникальные пользователи</h2>
            <div className="text-3xl font-bold text-teal-600">{Object.keys(data.users || {}).length}</div>
            <div className="text-gray-500 text-sm">(уникальных IP-адресов)</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Количество регистраций</h2>
            <div className="text-3xl font-bold text-orange-600">{data.registrations ?? 0}</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Генерации фона по страницам</h2>
            <ul className="space-y-1">
              {Object.entries(data.generations || {}).map(([page, count]) => (
                <li key={page} className="flex justify-between">
                  <span className="font-medium">{page}</span>
                  <span className="text-teal-700 font-bold">{Number(count)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Топ-5 ключевых слов промтов</h2>
            <ul className="space-y-1">
              {topKeywords.map(([word, count]) => (
                <li key={word} className="flex justify-between">
                  <span className="font-medium">{word}</span>
                  <span className="text-orange-600 font-bold">{Number(count)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Топ промтов</h2>
            <ul className="space-y-1">
              {Object.entries(data.prompts || {})
                .sort((a, b) => (b[1] as number) - (a[1] as number))
                .slice(0, 5)
                .map(([prompt, count]) => (
                  <li key={prompt} className="flex justify-between">
                    <span className="truncate max-w-xs" title={prompt}>{prompt}</span>
                    <span className="text-orange-600 font-bold">{Number(count)}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
} 