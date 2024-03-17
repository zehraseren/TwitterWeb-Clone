import { topics } from "../../../../utils/const";
import Topic from "./topic";

export default function Topics() {
  return (
    <section className="mb-4 rounded-2xl border border-[#16181c] bg-[#16181c]">
      <h5 className="py-3 px-4 flex items-center text-xl text-[#e7e9ea] font-extrabold leading-6">
        İlgini çekebilecek gündemler
      </h5>
      <div className="grid">
        {topics.map((topic, index) => (
          <Topic item={topic} key={index} />
        ))}
      </div>
    </section>
  );
}
