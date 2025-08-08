import Button from "../UI/Button";
import { TestimonialItem } from "./TestimonialsItem";
import { useState } from "react";

export const TestimonialsCard = ({ testimonios = [] }) => {
  const [showAll, setShowAll] = useState(false);
  // Si no tienes más de 6 testimonios, muestra todos
  const displayedTestimonials = showAll ? testimonios : testimonios.slice(0, 6);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {displayedTestimonials.map((testimonial) => (
          <TestimonialItem
            key={testimonial.id}
            name={testimonial.user_name}
            email={testimonial.user_email}
            avatarUrl={testimonial.user_avatar_url}
            rating={parseInt(testimonial.rating, 10)}
            comment={testimonial.comment}
            createdAt={testimonial.created_at}
          />
        ))}
      </div>

      {testimonios.length > 6 && (
        <Button
          variant="secondary"
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          {showAll ? "Show Less" : "View More"}
        </Button>
      )}
    </div>
  );
};
