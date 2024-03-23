import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";

export default function MainLayout() {
  return (
    <div className="w-[78.063rem] mx-auto flex ">
      <Sidebar />
      <main className="flex flex-1 gap-[1.875rem]">
        <main className="flex flex-1 border-x border-[#2f3336] max-w-[37.5rem]">
          <Outlet />
        </main>
      </main>
      <Rightbar />
    </div>
  );
}
