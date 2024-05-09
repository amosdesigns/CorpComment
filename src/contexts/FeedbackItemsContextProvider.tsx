import { createContext, useState, useMemo, useEffect, useContext } from "react";
import { type TFeedbackItem } from "../lib/types";
import { API } from "../lib/constants";

type TFeedbackItemsContext = {
  filteredFeedbacks: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddListToList: (text: string) => void;
  handleDisplayHash: (company: string) => void;
};

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(null);

export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const companies = feedbackItems.map((item) => item.company);
  const companySet = new Set(companies);
  const companyList = [...companySet];
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbacks = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [selectedCompany, feedbackItems]
  );

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

  const handleDisplayHash = (company: string) => {
    setSelectedCompany(company);
  };

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

  return (
    <FeedbackItemsContext.Provider
      value={{
        filteredFeedbacks,
        companyList,
        isLoading,
        errorMessage,
        handleAddListToList,
        handleDisplayHash,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "useFeedbackItemsContext must be used within a FeedbackItemsContextProvider"
    );
  }
  return context;
}
