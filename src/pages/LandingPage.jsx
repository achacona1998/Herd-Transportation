import AboutUs from "../sections/LandingPage/AboutUs";
import Hero from "../sections/LandingPage/Hero";
import Services from "../sections/LandingPage/Services";
import Testimonios from "../sections/LandingPage/Testimonios";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <AboutUs />
      <Services />
      <Testimonios />
    </div>
  );
};

export default LandingPage;
