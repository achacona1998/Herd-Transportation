import { faqData } from "../../constants/Testimonios/items";
import { FAQItem } from "./AskItem";

export const FAQCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center text-black">
      {faqData.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};
