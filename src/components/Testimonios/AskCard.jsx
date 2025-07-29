import { faqData } from "../../constants/Testimonios/items";
import { FAQItem } from "./AskItem";

export const FAQCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8  grid-cols-1 justify-items-center text-black">
      {faqData.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};
