import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
import More from "./more";
import NewTweet from "./new";
import { useAccount } from "../../../../store/auth/hooks";

export default function Menu() {
  const account = useAccount();
  return (
    <nav className="mt-[3px] mb-1" key={account.id}>
      {mainMenu.map((menu, index) => (
        <NavLink
          to={typeof menu.path === "function" ? menu.path() : menu.path}
          className="py-[3px] block group"
          key={index}
        >
          {({ isActive }) => (
            <div
              className={classNames(
                "py-[8px] px-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center -right-1 -top-1.5 text-[11px] bg-[#1d9bf0] absolute">
                    {menu.notification}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="pr-3 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <NewTweet />
    </nav>
  );
}
