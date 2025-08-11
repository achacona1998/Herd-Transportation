import { QuestionConst } from "../../constants/LevesOfServices/items";
import Button from "../UI/Button";
import { FAQItem } from "./AskItem";
import { useState } from "react";

export const QuestionCard = () => {
  const [showAll, setShowAll] = useState(false);
  const initialItems = 4;

  const displayedQuestions = showAll
    ? QuestionConst
    : QuestionConst.slice(0, initialItems);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center text-black w-full">
        {displayedQuestions.map((question, index) => (
          <FAQItem key={index} {...question} />
        ))}
      </div>

      {QuestionConst.length > initialItems && (
        <Button onClick={() => setShowAll(!showAll)} className="mt-6 ">
          {showAll ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};
