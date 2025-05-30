import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PageBackground } from "@/components/PageBackground";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token") || "";
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("registered")) {
      navigate("/docs/intro", { replace: true });
    }
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token, newPassword: password }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Ошибка сброса пароля");
      }
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      setError(err.message || "Ошибка сброса пароля");
    } finally {
      setLoading(false);
    }
  }

  if (!email || !token) {
    return (
      <>
        <PageBackground pageId="reset-password" />
        <div className="flex justify-center items-center h-dvh p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Сброс пароля</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertDescription>Некорректная ссылка для сброса пароля.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBackground pageId="reset-password" />
      <div className="flex justify-center items-center h-dvh p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Сброс пароля</CardTitle>
          </CardHeader>
          <CardContent>
            {success ? (
              <Alert>
                <AlertDescription>Пароль успешно изменён! Перенаправление на вход...</AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Новый пароль"
                  disabled={loading}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Сброс..." : "Сбросить пароль"}
                </Button>
                {error && <Alert><AlertDescription>{error}</AlertDescription></Alert>}
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
} 