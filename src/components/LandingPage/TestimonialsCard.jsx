import { TestimonialItem } from "../Testimonios/TestimonialsItem";

export const TestimonialsCard = ({ testimonios = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
      {testimonios.slice(0, 3).map((testimonial) => (
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
  );
};
