import { InfoCard } from "../../components/CoverageArea/InfoCard";
import Header from "../../components/UI/Header";
import { PAGE_HEADERS } from "../../constants/headers";

const Info = () => {
  return (
    <section className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <Header title={PAGE_HEADERS.COVERAGE_DETAILED.title} />
      <InfoCard />
    </section>
  );
};

export default Info;
