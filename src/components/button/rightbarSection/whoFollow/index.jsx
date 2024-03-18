import RightbarSection from "..";
import { useAccount } from "../../../../store/auth/hooks";

export default function WhoFollow() {
  const account = useAccount();
  return (
    <RightbarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
    ></RightbarSection>
  );
}
