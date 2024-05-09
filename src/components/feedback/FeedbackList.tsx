import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessageComponent from "../ErrorMessageComponent";
import { type TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) {
  if (isLoading) {
    return <Spinner />;
  }

  if (errorMessage !== "") {
    return <ErrorMessageComponent message={errorMessage} />;
  }

  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem: TFeedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
