import Logo from "./logo";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="w-[267px] min-h-screen max-h-screen px-0.2 flex flex-col overflow-auto">
      <Logo />
      <Menu />
      <div className="mt-auto">
        <div className="my-3">Test</div>
      </div>
    </aside>
  );
}
