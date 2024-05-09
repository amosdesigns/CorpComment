import {type CompanyBadgeProps} from '../../../lib/types';

const CompanyBadge = ({ badgeLetter }: CompanyBadgeProps) => {
  return (
    <div>
      <p>{badgeLetter}</p>
    </div>
  );
};

export default CompanyBadge;