import Header from "../components/UI/Header";
import PreguntasFrecuentes from "../sections/LevesOfServices/PreguntasFrecuentes";
import ServicesPersonalized from "../sections/LevesOfServices/ServicePersonalized";
import Services from "../sections/LevesOfServices/Sevices";

const LevelsOfServices = () => {
  return (
    <div className="min-h-screen pt-8">
      <Header
        title="Service Levels"
        subtitle={
          <>
            We offer different levels of attention and care adapted to the
            needs
            <br />
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
