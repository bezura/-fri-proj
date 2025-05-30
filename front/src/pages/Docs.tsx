import DocsNav from "@/components/DocsNav";
import { Outlet, useLocation } from "react-router";
import { PageBackground } from "@/components/PageBackground";

export default function Docs() {
  // Можно использовать useLocation для динамического pageId, если нужно уникально для каждого раздела
  // const location = useLocation();
  // const section = location.pathname.split("/")[2] || "intro";
  // const pageId = `docs-${section}`;

  return (
    <div className="relative mx-auto p-6 bg-white text-gray-800 font-['Roboto']">
      <PageBackground pageId="docs" />
      <DocsNav />
      <Outlet />
    </div>
  );
}
