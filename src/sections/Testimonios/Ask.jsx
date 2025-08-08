import { FAQCard } from "../../components/Testimonios/AskCard";
import Subheader from "../../components/UI/Subheader";
import { SECTION_SUBHEADERS } from "../../constants/headers";

const Ask = () => {
  return (
    <section className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <Subheader title={SECTION_SUBHEADERS.TESTIMONIALS_FAQ.title} />
      <FAQCard />
    </section>
  );
};

export default Ask;
