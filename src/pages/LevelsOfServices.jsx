import Header from "../components/UI/Header";
import { PAGE_HEADERS } from "../constants/headers";
import PreguntasFrecuentes from "../sections/LevesOfServices/PreguntasFrecuentes";
import ServicesPersonalized from "../sections/LevesOfServices/ServicePersonalized";
import Services from "../sections/LevesOfServices/Sevices";

const LevelsOfServices = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10">
      <Header
        title={PAGE_HEADERS.SERVICE_LEVELS.title}
        subtitle={PAGE_HEADERS.SERVICE_LEVELS.subtitle}
      />
      <Services />
      <ServicesPersonalized />
      <PreguntasFrecuentes />
    </div>
  );
};

export default LevelsOfServices;
