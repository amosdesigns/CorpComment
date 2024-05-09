import {type FBIDaysAgoProps } from '../../../lib/types';

const FBIDaysAgo = ({ daysAgo }: FBIDaysAgoProps) => {
  return <p>{daysAgo}d</p>;
};

export default FBIDaysAgo;