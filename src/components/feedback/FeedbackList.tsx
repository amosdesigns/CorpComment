import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessageComponent from "../ErrorMessageComponent";
import { useFeedbackItemsContext } from "../../contexts/FeedbackItemsContextProvider";
import { TFeedbackItem } from "../../lib/types";

export default function FeedbackList() {
  const { isLoading, errorMessage, filteredFeedbacks } =
    useFeedbackItemsContext();

  if (isLoading) {
    return <Spinner />;
  }

  if (errorMessage !== "") {
    return <ErrorMessageComponent message={errorMessage} />;
  }

  return (
    <ol className="feedback-list">
      {filteredFeedbacks.map((feedbackItem: TFeedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
