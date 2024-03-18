import { topics } from "../../../../utils/const";
import Topic from "./topic";
import { Link } from "react-router-dom";

export default function Topics() {
  return (
    <section className="mb-4 rounded-2xl border border-[#16181c] bg-[#16181c] overflow-hidden">
      <h5 className="py-3 px-4 flex items-center text-xl text-[#e7e9ea] font-extrabold leading-6">
        İlgini çekebilecek gündemler
      </h5>
      <div className="grid">
        {topics.map((topic, index) => (
          <Topic item={topic} key={index} />
        ))}
        <Link
          className="h-[52px] px-4 flex items-center text-[#1d9bf0] text-[15px] hover:bg-white/[0.03] transition-colors"
          to="/trends"
        >
          Daha fazla göster
        </Link>
      </div>
    </section>
  );
}
