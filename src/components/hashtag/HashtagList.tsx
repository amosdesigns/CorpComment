import { useFeedbackItemsContext } from "../../contexts/FeedbackItemsContextProvider";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const { companyList, handleDisplayHash } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onDisplayHash={handleDisplayHash}
        />
      ))}
      <HashtagItem company="All Companies" onDisplayHash={handleDisplayHash} />
    </ul>
  );
}
