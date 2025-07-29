import { Rating } from "../../utils/LandingPage/rating";

export const TestimonialCard = ({ name, testimonial, rating }) => (
  <div className="bg-white px-5 rounded-lg shadow-lg border py-3 border-[#CFB53B]">
    <div className="flex items-center gap-4">
      <span className="h-12 w-12 bg-green-400 rounded-full"></span>
      <div>
        <p className="font-semibold text-gray-800 ">{name}</p>
        <div className="flex items-center text-[#CFB53B]">{Rating(rating)}</div>
      </div>
    </div>
    <p className="text-gray-600 italic mt-4 text-justify">"{testimonial}"</p>
  </div>
);
