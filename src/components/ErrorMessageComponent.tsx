import { type ErrorMessageProps } from "../lib/types";

export default function ErrorMessageComponent({ message }: ErrorMessageProps) {
  return (
    <div className="feedback-list">
      <span className="errorMessage">{message}</span>
    </div>
  );
}
