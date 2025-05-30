import DocsNav from "@/components/DocsNav";
import { Outlet } from "react-router";

export default function Docs() {
  return (
    <div className="relative mx-auto p-6 bg-white text-gray-800 font-['Roboto']">
      <DocsNav />
      <Outlet />
    </div>
  );
}
