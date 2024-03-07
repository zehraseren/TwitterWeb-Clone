import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="w-[267px] min-h-screen px-0.2">
      <Logo />
      <Menu />
    </aside>
  );
}
