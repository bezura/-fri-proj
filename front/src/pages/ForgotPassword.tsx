import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PageBackground } from "@/components/PageBackground";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      const res = await fetch("/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      setSent(true);
    } catch (err) {
      setError("Ошибка отправки письма");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageBackground pageId="forgot-password" />
      <div className="flex justify-center items-center h-dvh p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Восстановление пароля</CardTitle>
          </CardHeader>
          <CardContent>
            {sent ? (
              <Alert>
                <AlertDescription>
                  Если такой email есть в системе, на него отправлено письмо для сброса пароля.
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  disabled={loading}
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Отправка..." : "Отправить ссылку для сброса"}
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