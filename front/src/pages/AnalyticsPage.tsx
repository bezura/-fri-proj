import { useEffect, useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
);

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
  const topPrompts = data ? Object.entries(data.prompts || {})
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .slice(0, 5) : [];

  // График генераций по страницам
  const generationsBarData = data ? {
    labels: Object.keys(data.generations || {}),
    datasets: [
      {
        label: "Генерации фона",
        data: Object.values(data.generations || {}),
        backgroundColor: "#00897b",
      },
    ],
  } : undefined;
  const generationsBarOptions = {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  // График топ-5 ключевых слов
  const keywordsBarData = topKeywords.length ? {
    labels: topKeywords.map(([w]) => w),
    datasets: [
      {
        label: "Встречаемость",
        data: topKeywords.map(([, c]) => c),
        backgroundColor: "#ff9800",
      },
    ],
  } : undefined;
  const keywordsBarOptions = {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  // График топ-5 промтов
  const promptsBarData = topPrompts.length ? {
    labels: topPrompts.map(([p]) => p.length > 20 ? p.slice(0, 20) + "..." : p),
    datasets: [
      {
        label: "Использования",
        data: topPrompts.map(([, c]) => c),
        backgroundColor: "#43a047",
      },
    ],
  } : undefined;
  const promptsBarOptions = {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  // Пример: распределение пользователей по ролям (если есть data.roles)
  const rolesPieData = data && data.roles ? {
    labels: Object.keys(data.roles),
    datasets: [
      {
        data: Object.values(data.roles),
        backgroundColor: ["#00897b", "#43a047", "#ffb300", "#6d4c41", "#90caf9", "#e57373"],
      },
    ],
  } : undefined;
  const rolesPieOptions = {
    plugins: { legend: { position: "bottom" as const } },
  };

  // Пример: рост регистраций по месяцам (если есть data.registrationsByMonth)
  const registrationsLineData = data && data.registrationsByMonth ? {
    labels: Object.keys(data.registrationsByMonth),
    datasets: [
      {
        label: "Регистрации",
        data: Object.values(data.registrationsByMonth),
        borderColor: "#00897b",
        backgroundColor: "#b2dfdb",
        tension: 0.4,
        fill: true,
      },
    ],
  } : undefined;
  const registrationsLineOptions = {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

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
            {generationsBarData && (
              <div style={{height: 220}}><Bar data={generationsBarData} options={generationsBarOptions} /></div>
            )}
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Топ-5 ключевых слов промтов</h2>
            {keywordsBarData && (
              <div style={{height: 220}}><Bar data={keywordsBarData} options={keywordsBarOptions} /></div>
            )}
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Топ промтов</h2>
            {promptsBarData && (
              <div style={{height: 220}}><Bar data={promptsBarData} options={promptsBarOptions} /></div>
            )}
          </div>
          {rolesPieData && (
            <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Распределение пользователей по ролям</h2>
              <Pie data={rolesPieData} options={rolesPieOptions} />
            </div>
          )}
          {registrationsLineData && (
            <div className="bg-white/80 backdrop-blur rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Рост регистраций по месяцам</h2>
              <div style={{height: 220}}><Line data={registrationsLineData} options={registrationsLineOptions} /></div>
            </div>
          )}
        </div>
      )}
    </section>
  );
} 