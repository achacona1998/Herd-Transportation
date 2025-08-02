import { Rating } from "../../utils/LandingPage/rating";

export const TestimonialItem = ({ name, testimonial, rating }) => (
  <div className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] px-4 sm:px-5 rounded-lg shadow-lg border py-3 sm:py-4 border-[#CFB53B] h-full flex flex-col">
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="h-10 w-10 sm:h-12 sm:w-12 bg-green-400 rounded-full flex-shrink-0"></span>
      <div>
        <h3 className="font-semibold text-white text-sm sm:text-base">{name}</h3>
        <div className="flex items-center text-[#CFB53B]">{Rating(rating)}</div>
      </div>
    </div>
    <p className="text-white italic mt-3 sm:mt-4 text-justify text-sm sm:text-base flex-grow">"{testimonial}"</p>
  </div>
);
