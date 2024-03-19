import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="mb-4 px-4 gap-2 text-[#71767b] text-[13px] flex flex-wrap over:underline leading-4">
        <Link to="/">Hizmet Şartları</Link>
        <Link to="/">Gizlilik Politikası</Link>
        <Link to="/">Çerez Politikası</Link>
        <Link to="/">Imprint</Link>
        <Link to="/">Erişebilirlik</Link>
        <Link to="/">Reklam Bilgisi</Link>
        <Popover className="inline-flex leading-4 relative">
          <Popover.Button
            className="text-[#71767b] text-[#13px] inline-flex items-center hover:underline outline-none leading-4"
            to="/"
          >
            Daha Fazla
            <svg className="h-[1em] px-0.5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className="w-[150px] max-w-[384px] bg-black shadow-box bottom-0 right-0 rounded-xl grid absolute">
            <Link
              className="py-3 px-4 text-white text-[15px] font-bold hover:bg-[#16181ccc] transition-colors overflow-hidden leading-5"
              to="/"
            >
              Hakkımda
            </Link>
            <Link
              className="py-3 px-4 text-white text-[15px] font-bold hover:bg-[#16181ccc] transition-colors overflow-hidden leading-5"
              to="/"
            >
              Durum
            </Link>
            <Link
              className="py-3 px-4 text-white text-[15px] font-bold hover:bg-[#16181ccc] transition-colors overflow-hidden leading-5"
              to="/"
            >
              İşletmeler için X
            </Link>
            <Link
              className="py-3 px-4 text-white text-[15px] font-bold hover:bg-[#16181ccc] transition-colors overflow-hidden leading-5"
              to="/"
            >
              Geliştiriciler
            </Link>
          </Popover.Panel>
        </Popover>
        <p className="text-[#71767b] text-[13px] leading-4">
          &copy; 2024 X Corp. | Zehra Şeren
        </p>
      </div>
    </footer>
  );
}
