import Content from "../../components/content";
import Sidebar from "../../layouts/main/sidebar";

export default function Messages() {
  return (
    <div>
      <div className="w-[78.063rem] mx-auto flex">
        <Sidebar />
        <main className="flex gap-3.5">
          <main className="border-x border-[#2f3336] w-[28rem]]">Messages</main>
        </main>
        <div className="mr-0.5">
          <Content />
        </div>
      </div>
    </div>
  );
}
