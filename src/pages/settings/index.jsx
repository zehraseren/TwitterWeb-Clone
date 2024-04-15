import Sidebar from "../../layouts/main/sidebar";
import Content from "../../components/content";
import Search from "../../layouts/main/rightbar/search";
import { settings } from "../../utils/const";
import { NavLink } from "react-router-dom";

export default function Settings() {
  return (
    <div className="w-[78.063rem] mx-auto flex">
      <Sidebar />
      <main className="flex gap-3.5">
        <main className="border-x border-[#2f3336] w-[28rem]">
          <div className="h-[3.313rem] font-bold px-4 py-3">
            <h1 className="text-xl">Ayarlar</h1>
          </div>
          <div className="px-3 pt-2">
            <Search />
          </div>
          <div>
            <nav>
              {settings.map((setting, index) => (
                <NavLink to={setting.path} key={index}>
                  <div className="flex justify-between px-4 py-2.5 hover:bg-[#eff3f41a]">
                    <div>{setting.title}</div>
                    <div>{setting.icon}</div>
                  </div>
                </NavLink>
              ))}
            </nav>
          </div>
        </main>
        <div className="mr-0.5">
          <Content />
        </div>
      </main>
    </div>
  );
}
