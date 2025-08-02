import { useNavigate } from "react-router-dom";
import { TestimonialsCard } from "../../components/Testimonios/TestimomialsCard";
import Button from "../../components/UI/Button";
import Subheader from "../../components/UI/Subheader";

const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <TestimonialsCard />

      <div className="text-center my-12 sm:my-14 md:my-16">
        <Subheader title="Ready to experience our service?" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8">
          <Button onClick={() => navigate("/contact")} className="w-full sm:w-auto">
            Request Information
          </Button>
          <Button variant="secondary" onClick={() => navigate("/trips")} className="w-full sm:w-auto">
            View Trip Types
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
