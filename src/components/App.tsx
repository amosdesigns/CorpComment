import HashtagList from "./hashtag/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";
import { type TFeedbackItem } from "../lib/types";
const API =
  "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddListToList = async (text: string) => {
    const CompanyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      badgeLetter: CompanyName.substring(0, 1).toUpperCase(),
      company: CompanyName,
      id: new Date().getTime(),
    };

    setFeedbackItems([...feedbackItems, newItem]);


      await fetch(API, {
      method: "POST",
      body: JSON.stringify(newItem),
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage(
          "An error occurred while fetching feedbacks. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        handleAddListToList={handleAddListToList}
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
      <HashtagList />
    </div>
  );
}

export default App;
