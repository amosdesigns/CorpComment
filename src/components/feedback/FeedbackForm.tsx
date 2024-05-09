import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type TFeedbackFormProps = {
  onAddListToList: (text: string) => void;
};

export default function FeedbackForm({ onAddListToList }: TFeedbackFormProps) {
  const [text, setText] = useState("");
  const count = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateText(text)) {
      return;
    }
    onAddListToList(text);
    setText("");
  };

  const validateText = (text: string) => { 
    if (!text) {
      return false;
    }
    return true;
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        id="feedback-textarea"
        placeholder="x"
        spellCheck={false}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company name
      </label>
      <div>
        <p className="u-italic">{count}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}