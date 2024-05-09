export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type CompanyBadgeProps = {
  badgeLetter: string;
};

export type UpVoteProps = {
  upvoteCount: number;
};

export type FBIDaysAgoProps = {
  daysAgo: number;
};

export type BodyProps = {
  company: string;
  text: string;
};
export type ErrorMessageProps = {
  message: string;
};