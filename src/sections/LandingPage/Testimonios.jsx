import { useNavigate } from "react-router-dom";
import { TestimonialsCard } from "../../components/LandingPage/TestimonialsCard";
import Button from "../../components/UI/Button";
import Header from "../../components/UI/Header";

const Testimonios = () => {
  const navigate = useNavigate();
  return (
    <section className=" pt-20">
      <div className="container mx-auto flex flex-col items-center">
        <Header title="What Our Clients Say?" />
        <Button
          className="-mt-4 mb-5"
          onClick={() => navigate("/testimonials")}>
          Comment Here
        </Button>
        <TestimonialsCard />
      </div>
    </section>
  );
};

export default Testimonios;
