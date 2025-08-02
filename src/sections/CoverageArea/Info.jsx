import { InfoCard } from "../../components/CoverageArea/InfoCard";
import Header from "../../components/UI/Header";

const Info = () => {
  return (
    <section className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <Header title="Detailed Area Information" />
      <InfoCard />
    </section>
  );
};

export default Info;
