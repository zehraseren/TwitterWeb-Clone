import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-4">
      <Search />
      <Premium/>
      <Topics/>
    </aside>
  );
}
