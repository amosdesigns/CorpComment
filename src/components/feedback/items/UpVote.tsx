import { TriangleUpIcon } from "@radix-ui/react-icons";
import {type  UpVoteProps } from "../../../lib/types";
const UpVote = ({ upvoteCount }: UpVoteProps) => {
  return (
    <button>
      <TriangleUpIcon />
      <span>{upvoteCount}</span>
    </button>
  );
};

export default UpVote;