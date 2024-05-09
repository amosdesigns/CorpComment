import {type TFeedbackItem } from "../../lib/types";
import UpVote from "./items/UpVote";
import CompanyBadge from "./items/CompanyBadge";
import Body from "./items/Body";
import FBIDaysAgo from "./items/FBIDaysAgo";

type TFeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({ feedbackItem }: TFeedbackItemProps) {
  const { upvoteCount, badgeLetter, company, text, daysAgo } = feedbackItem;

  return (
    <li className="feedback">
      <UpVote upvoteCount={upvoteCount} />
      <CompanyBadge badgeLetter={badgeLetter} />
      <Body company={company} text={text} />
      <FBIDaysAgo daysAgo={daysAgo} />
    </li>
  );
}
