import Premium from "./premium";
import Search from "./search";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-4">
      <Search />
      <Premium/>
    </aside>
  );
}
