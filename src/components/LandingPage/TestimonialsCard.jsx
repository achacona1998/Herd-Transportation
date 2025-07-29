import { Opinions } from "../../constants/LandingPage/items";
import { Rating } from "../../utils/LandingPage/rating";
import { TestimonialCard } from "../Testimonios/TestimonialsItem";

export const TestimonialsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Opinions.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};
