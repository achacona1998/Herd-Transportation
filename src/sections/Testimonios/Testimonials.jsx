import { useNavigate } from "react-router-dom";
import { TestimonialsCard } from "../../components/Testimonios/TestimomialsCard";
import Button from "../../components/UI/Button";
import Subheader from "../../components/UI/Subheader";

const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto pt-10">
      <TestimonialsCard />

      <div className="text-center my-16">
        <Subheader title="Ready to experience our service?" />
        <div className="flex justify-center items-center gap-4">
          <Button onClick={() => navigate("/contact")}>
            Request Information
          </Button>
          <Button variant="secondary" onClick={() => navigate("/trips")}>
            View Trip Types
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
