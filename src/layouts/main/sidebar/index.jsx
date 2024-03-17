import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="w-[267px] min-h-screen max-h-screen top-0 flex flex-col sticky">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
