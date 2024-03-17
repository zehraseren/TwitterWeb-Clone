/* eslint-disable react/no-unescaped-entities */
import Button from "../../../../components/button";

export default function Premium() {
  return (
    <section className="bg-[#16181c] mb-4 py-3 px-4 rounded-2xl text-[#e7e9ea] gap-2.5 flex flex-col border border-[#16181c]">
      <h6 className="text-xl font-extrabold leading-6">Premium'a Abone ol</h6>
      <p className="text-[16px] font-normal leading-5">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam
        geliri payı kazan.
      </p>
      <div className="self-start">
        <Button>Abone ol</Button>
      </div>
    </section>
  );
}
