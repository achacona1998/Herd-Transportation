import { testimonialData } from "../../constants/Testimonios/items";
import { Rating } from "../../utils/LandingPage/rating";
import { TestimonialCard } from "./TestimonialsItem";

export const TestimonialsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonialData.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};
