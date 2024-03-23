/* eslint-disable react/prop-types */
import { Popover } from "@headlessui/react";

export default function More() {
  return (
    <Popover className="relative">
      <Popover.Button className="py-[0.188rem] block outline-none group">
        <div>
          <div className="p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors">
            <div className="w-[1.641rem]] h-[1.641rem]] relative">
              <svg
                viewBox="0 0 24 24"
                width={26.25}
                height={26.25}
                className="block"
              >
                <path
                  fill="#e7e9ea"
                  d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                />
              </svg>
            </div>
            <div className="pr-4 text-xl">Daha fazla</div>
          </div>
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[19.875rem] bottom-0 left-0 bg-black  shadow-box rounded-xl overflow-hidden absolute">
        {/* Bookmarks */}
        <button className="px-4 h-14 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
          <div className="w-[1.641rem]] h-[1.641rem]] relative">
            <svg
              viewBox="0 0 24 24"
              width={26.25}
              height={26.25}
              className="block"
            >
              <path
                fill="#e7e9ea"
                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Yer işaretleri</div>
        </button>
        {/* Monetization */}
        <button className="px-4 h-14 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
          <div className="w-[21.641rem]] h-[1.641rem]] relative">
            <svg
              viewBox="0 0 24 24"
              width={26.25}
              height={26.25}
              className="block"
            >
              <path
                fill="#e7e9ea"
                d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Para kazanma</div>
        </button>
        {/* Premium */}
        <button className="px-4 h-14 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
          <div className="w-[1.641rem]] h-[1.641rem]] relative">
            <svg
              viewBox="0 0 24 24"
              width={26.25}
              height={26.25}
              className="block"
            >
              <path
                fill="#e7e9ea"
                d="M8 18V6H4.5c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5H8zm11.5 0c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5H16v12h3.5zM10 6v12h4V6h-4zM4.5 20C3.12 20 2 18.88 2 17.5v-11C2 5.12 3.12 4 4.5 4h15C20.88 4 22 5.12 22 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-15z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Pro</div>
        </button>
        {/* Ads */}
        <button className="px-4 h-14 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
          <div className="w-[1.641rem]] h-[1.641rem]] relative">
            <svg
              viewBox="0 0 24 24"
              width={26.25}
              height={26.25}
              className="block"
            >
              <path
                fill="#e7e9ea"
                d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Reklamlar</div>
        </button>
        {/* Setting and Privacy */}
        <button className="px-4 h-14 w-full inline-flex items-center gap-5 transition-colors hover:bg-[#eff3f41a]">
          <div className="w-[1.641rem] h-[1.641rem]] relative">
            <svg
              viewBox="0 0 24 24"
              width={26.25}
              height={26.25}
              className="block"
            >
              <path
                fill="#e7e9ea"
                d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"
              />
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Ayarlar ve gizlilik</div>
        </button>
      </Popover.Panel>
    </Popover>
  );
}
