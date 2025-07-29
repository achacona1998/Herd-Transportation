import { FAQCard } from "../../components/Testimonios/AskCard";
import Subheader from "../../components/UI/Subheader";

const Ask = () => {
  return (
    <section className="container mx-auto pt-10">
      <Subheader title="Frequently Asked Questions About Our Service" />
      <FAQCard />
    </section>
  );
};

export default Ask;
