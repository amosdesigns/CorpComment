import Pattern from '../Pattern'
import Logo from '../Logo'
import FeedbackForm from '../feedback/FeedbackForm'
import PageHeading from '../PageHeading'

type HeaderProps = {
  handleAddListToList: (text: string) => void;
};

export default function Header({ handleAddListToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddListToList={handleAddListToList} />
    </header>
  );
}
