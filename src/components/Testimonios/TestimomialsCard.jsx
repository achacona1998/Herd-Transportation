import { testimonialData } from "../../constants/Testimonios/items";
import { Rating } from "../../utils/LandingPage/rating";
import { TestimonialItem } from "./TestimonialsItem";

export const TestimonialsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      {testimonialData.map((testimonial, index) => (
        <TestimonialItem key={index} {...testimonial} />
      ))}
    </div>
  );
};
