import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/main/sidebar";
import RightBar from "./rightbar";

export default function MainLayout() {
  return (
    <div className="w-[1249px] mx-auto flex ">
      <Sidebar />
      <main className="flex flex-1 gap-[30px]">
        <main className="flex-1 border-x border-[#2f3336] max-w-[600px]">
          <Outlet />
        </main>
      </main>
      <RightBar />
    </div>
  );
}
