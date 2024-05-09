import Pattern from "../Pattern";
import Logo from "../Logo";
import FeedbackForm from "../feedback/FeedbackForm";
import PageHeading from "../PageHeading";
import { useFeedbackItemsContext } from "../../contexts/FeedbackItemsContextProvider";

export default function Header() {
  const { handleAddListToList } = useFeedbackItemsContext();
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddListToList={handleAddListToList} />
    </header>
  );
}
