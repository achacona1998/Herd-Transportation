import Header from "../components/UI/Header";
import PreguntasFrecuentes from "../sections/LevesOfServices/PreguntasFrecuentes";
import ServicesPersonalized from "../sections/LevesOfServices/ServicePersonalized";
import Services from "../sections/LevesOfServices/Sevices";

const LevelsOfServices = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10">
      <Header
        title="Service Levels"
        subtitle={
          <>
            We offer different levels of attention and care adapted to the
            needs
            <br className="hidden sm:block" />
            specific to each passenger, always guaranteeing maximum
            comfort and safety.
          </>
        }
      />
      <Services />
      <ServicesPersonalized />
      <PreguntasFrecuentes />
    </div>
  );
};

export default LevelsOfServices;
