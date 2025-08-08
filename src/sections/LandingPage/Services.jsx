import { ServicesCard } from "../../components/LandingPage/ServicesCard";
import Header from "../../components/UI/Header";
import { PAGE_HEADERS } from "../../constants/headers";

const Services = () => {
  return (
    <section className="pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <Header
          title={PAGE_HEADERS.SERVICES.title}
          subtitle={PAGE_HEADERS.SERVICES.subtitle}
        />

        <ServicesCard />
      </div>
    </section>
  );
};

export default Services;
