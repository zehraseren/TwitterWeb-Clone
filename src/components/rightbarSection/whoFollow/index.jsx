import RightbarSection from "../../rightbarSection";
import { useAccount } from "../../../store/auth/hooks";
import { WhoFollowUsers } from "../../../mock";
import UserCard from "../../userCard";

export default function WhoFollow() {
  const account = useAccount();
  return (
    <RightbarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
    >
      {WhoFollowUsers.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </RightbarSection>
  );
}
