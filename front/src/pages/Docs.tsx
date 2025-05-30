import {useEffect } from "react";
import { useNavigate, useLocation} from "react-router";
import DocsNav from "@/components/DocsNav";
import { Outlet } from "react-router";
import { PageBackground } from "@/components/PageBackground";

export default function Docs() {

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("registered") !== "true") {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  // Можно использовать useLocation для динамического pageId, если нужно уникально для каждого раздела
  const location = useLocation();
  const section = location.pathname.split("/")[2] || "intro";
  const pageId = `docs-${section}`;

  return (
    <div className="relative mx-auto p-6 bg-white text-gray-800 font-['Roboto']">
      <PageBackground pageId={pageId} />
      <DocsNav />
      <Outlet />
    </div>
  );
}
