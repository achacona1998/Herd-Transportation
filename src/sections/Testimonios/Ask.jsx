import { FAQCard } from "../../components/Testimonios/AskCard";
import Subheader from "../../components/UI/Subheader";

const Ask = () => {
  return (
    <section className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <Subheader title="Frequently Asked Questions About Our Service" />
      <FAQCard />
    </section>
  );
};

export default Ask;
