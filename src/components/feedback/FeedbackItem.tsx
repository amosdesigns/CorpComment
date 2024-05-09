import { type TFeedbackItem } from "../../lib/types";
import UpVote from "./items/UpVote";
import CompanyBadge from "./items/CompanyBadge";
import Body from "./items/Body";
import FBIDaysAgo from "./items/FBIDaysAgo";
import { useState } from "react";

type TFeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({ feedbackItem }: TFeedbackItemProps) {
  const { badgeLetter, company, text, daysAgo } = feedbackItem;
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);
  
  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback-expanded" : ""}`}
    >
      <UpVote setUpvoteCount={setUpvoteCount} upvoteCount={upvoteCount} />
      <CompanyBadge badgeLetter={badgeLetter} />
      <Body company={company} text={text} />
      <FBIDaysAgo daysAgo={daysAgo} />
    </li>
  );
}
