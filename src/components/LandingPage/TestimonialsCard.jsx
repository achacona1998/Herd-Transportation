import { Opinions } from "../../constants/LandingPage/items";
import { Rating } from "../../utils/LandingPage/rating";
import { TestimonialItem } from "../Testimonios/TestimonialsItem";

export const TestimonialsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
      {Opinions.map((testimonial, index) => (
        <TestimonialItem key={index} {...testimonial} />
      ))}
    </div>
  );
};
