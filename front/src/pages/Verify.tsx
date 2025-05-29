import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Link, useSearchParams } from "react-router";

export default function Verify() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyEmail() {
      const token = searchParams.get("token");
      const email = searchParams.get("email");

      if (!token || !email) {
        setError("Отсутствуют параметры для подтверждения");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:3000/verify?token=${token}&email=${encodeURIComponent(
            email
          )}`
        );
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Ошибка подтверждения");
        } else {
          setMessage("Email успешно подтверждён!");
          localStorage.setItem('registered', 'true');
        }
      } catch {
        setError("Ошибка сети");
      } finally {
        setLoading(false);
      }
    }

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="flex justify-center items-center h-dvh p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Подтверждение Email
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading && (
            <div className="flex flex-col items-center justify-center py-6">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500 mb-2" />
              <p className="text-gray-600">Проверка...</p>
            </div>
          )}

          {message && (
            <Alert className="border-green-200 bg-green-50 text-green-800">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              <AlertDescription>
                {message}
                <Link to="/docs">Перейти к содержимому проекта</Link> 
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="border-red-200 bg-red-50 text-red-800">
              <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
