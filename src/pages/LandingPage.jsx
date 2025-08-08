import { useState } from "react";
import AboutUs from "../sections/LandingPage/AboutUs";
import Hero from "../sections/LandingPage/Hero";
import Services from "../sections/LandingPage/Services";
import Testimonios from "../sections/LandingPage/Testimonios";
import { getTestimonios } from "../services/testimonioService";
import { useEffect } from "react";

const LandingPage = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    cargarTestimonios();
  }, []);

  const cargarTestimonios = async () => {
    setIsLoading(true);
    try {
      const datos = await getTestimonios();
      console.log(datos);
      setTestimonios(datos);
    } catch (error) {
      console.error("Error loading testimonios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <Testimonios testimonios={testimonios} isLoading={isLoading} />
    </div>
  );
};

export default LandingPage;
