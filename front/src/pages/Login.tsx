import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PageBackground } from "@/components/PageBackground";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("registered") === "true") {
      navigate("/docs/intro", { replace: true });
    }
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Ошибка авторизации");
      }
      localStorage.setItem("registered", "true");
      navigate("/docs");
    } catch (err: any) {
      setError(err.message || "Ошибка авторизации");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageBackground pageId="login" />
      <div className="flex justify-center items-center h-dvh p-4">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Вход</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <Input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                disabled={loading}
              />
              <Input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Пароль"
                disabled={loading}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Вход..." : "Войти"}
              </Button>
              {error && <Alert><AlertDescription>{error}</AlertDescription></Alert>}
              <div className="flex flex-col gap-2 mt-4 text-center">
                <Link to="/forgot-password" className="text-teal-700 hover:underline">Забыли пароль?</Link>
                <span className="text-gray-500 text-sm">
                  Нет аккаунта? <Link to="/register" className="text-teal-700 hover:underline">Зарегистрироваться</Link>
                </span>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
} 