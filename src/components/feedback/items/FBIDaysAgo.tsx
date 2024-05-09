import {type FBIDaysAgoProps } from '../../../lib/types';

const FBIDaysAgo = ({ daysAgo }: FBIDaysAgoProps) => {
  return (
    <p className={(daysAgo === 0) ? 'u-bold':""}>
      {daysAgo === 0 ? "NEW" : `${daysAgo}d`}
    </p>
  );
};

export default FBIDaysAgo;