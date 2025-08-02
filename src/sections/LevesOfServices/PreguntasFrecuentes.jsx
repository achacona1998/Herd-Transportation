import { QuestionCard } from "../../components/LevesOfServices/QuestionCard";
import Header from "../../components/UI/Header";

const PreguntasFrecuentes = () => {
  return (
    <section className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <Header title="Frequently Asked Questions" />
      <QuestionCard />
    </section>
  );
};

export default PreguntasFrecuentes;
