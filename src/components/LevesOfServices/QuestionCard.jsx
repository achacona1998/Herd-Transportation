import { QuestionConst } from "../../constants/LevesOfServices/items";
import { FAQItem } from "../Testimonios/AskItem";

export const QuestionCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8  grid-cols-1 justify-items-center text-black">
      {QuestionConst.map((question, index) => (
        <FAQItem key={index} {...question} />
      ))}
    </div>
  );
};
