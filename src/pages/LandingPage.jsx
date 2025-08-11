import AboutUs from "../sections/LandingPage/AboutUs";
import Hero from "../sections/LandingPage/Hero";
import Services from "../sections/LandingPage/Services";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
};

export default LandingPage;
