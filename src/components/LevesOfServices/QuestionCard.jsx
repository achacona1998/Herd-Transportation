import { QuestionConst } from "../../constants/LevesOfServices/items";
import { FAQItem } from "../Testimonios/AskItem";

export const QuestionCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center text-black">
      {QuestionConst.map((question, index) => (
        <FAQItem key={index} {...question} />
      ))}
    </div>
  );
};
