import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
import More from "./more";
import NewTweet from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} className="py-[3px] block group" key={index}>
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#eff3f41a] transition-colors",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[28px] h-[28px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center -right-1 -top-1.5 text-[11px] bg-[#1d9bf0] absolute">
                    {menu.notification}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <NewTweet />
    </nav>
  );
}
