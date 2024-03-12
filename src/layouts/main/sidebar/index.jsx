import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="w-[267px] min-h-screen max-h-screen flex flex-col ">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
