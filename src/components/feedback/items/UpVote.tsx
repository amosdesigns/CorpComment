import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type UpVoteProps } from "../../../lib/types";
const UpVote = ({ upvoteCount, setUpvoteCount }: UpVoteProps) => {
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setUpvoteCount((prev: number) => ++prev);
        e.stopPropagation();
        e.currentTarget.disabled = true;
      }}
    >
      <TriangleUpIcon />
      <span>{upvoteCount}</span>
    </button>
  );
};

export default UpVote;
