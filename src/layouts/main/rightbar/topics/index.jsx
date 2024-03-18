import RightbarSection from "../../../../components/button/rightbarSection";
import { topics } from "../../../../utils/const";
import Topic from "./topic";

export default function Topics() {
  return (
    <RightbarSection title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </RightbarSection>
  );
}
