import Search from "./search";
import Premium from "./premium";
import Topics from "./topics";
import WhoFollow from "./../../../components/rightbarSection/whoFollow";
import Footer from "./footer";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-0.5">
      <Search />
      <Premium />
      <Topics />
      <WhoFollow />
      <Footer />
    </aside>
  );
}
