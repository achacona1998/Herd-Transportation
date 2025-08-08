import { useNavigate } from "react-router-dom";
import { TestimonialsCard } from "../../components/LandingPage/TestimonialsCard";
import Button from "../../components/UI/Button";
import Header from "../../components/UI/Header";
import { PAGE_HEADERS } from "../../constants/headers";
import { LoadingState } from "../../components/UI/LoadingState";

const Testimonios = ({ testimonios, isLoading }) => {
  const navigate = useNavigate();
  return (
    <section className="pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col items-center">
        <Header title={PAGE_HEADERS.TESTIMONIALS.title} />
        <Button
          className="-mt-2 sm:-mt-4 mb-4 sm:mb-5"
          onClick={() => navigate("/testimonials")}>
          Comment Here
        </Button>
        <LoadingState isLoading={isLoading} />
        <TestimonialsCard testimonios={testimonios} />
      </div>
    </section>
  );
};

export default Testimonios;
