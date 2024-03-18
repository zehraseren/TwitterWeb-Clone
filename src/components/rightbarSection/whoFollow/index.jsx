import RightbarSection from "../../rightbarSection";
import { useAccount } from "../../../store/auth/hooks";
import { WhoFollowUsers } from "../../../mock";
import Button from "../../../components/button";

export default function WhoFollow() {
  const account = useAccount();
  return (
    <RightbarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
    >
      {WhoFollowUsers.map((user, index) => (
        <button
          className="py-3 px-4 flex gap-3 hover:bg-white/[0.03] transition-colors"
          key={index}
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user.avatar}
            alt=""
          />
          <div className="flex flex-1 flex-col text-left">
            <div className="text-[15px] text-[#e7e9ea] font-bold flex leading-5">
              {user.fullname}
              {user?.verified && (
                <svg
                  className="ml-0.5 text-[#1d9bff]"
                  viewBox="0 0 22 22"
                  width={18.75}
                  height={18.75}
                >
                  <path
                    fill="currentColor"
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  />
                </svg>
              )}
            </div>
            <div className="text-[15px] text-[#71767b]">@{user.username}</div>
          </div>
          <div>
            <Button size="small" variant="white">
              Takip et
            </Button>
          </div>
        </button>
      ))}
    </RightbarSection>
  );
}
