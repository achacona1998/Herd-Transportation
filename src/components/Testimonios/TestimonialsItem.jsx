import { Rating } from "../../utils/LandingPage/rating";

export const TestimonialItem = ({
  name,
  email,
  avatarUrl,
  rating,
  comment,
  createdAt,
}) => (
  <div className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] px-4 sm:px-5 rounded-lg shadow-lg border py-3 sm:py-4 border-[#CFB53B] h-full flex flex-col">
    <div className="flex items-center gap-3 sm:gap-4">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`Avatar de ${name}`}
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <span className="h-10 w-10 sm:h-12 sm:w-12 bg-green-400 rounded-full flex-shrink-0"></span>
      )}

      <div>
        <h3 className="font-semibold text-white text-sm sm:text-base">
          {name}
        </h3>
        <p className="text-sm text-gray-300">{email}</p>
        <div className="flex items-center text-[#CFB53B] mt-1">
          {Rating(rating)}
        </div>
      </div>
    </div>

    <p className="text-white italic mt-3 sm:mt-4 text-justify text-sm sm:text-base flex-grow">
      "{comment}"
    </p>

    <p className="text-right text-xs text-gray-400 mt-2">
      {createdAt ? new Date(createdAt).toLocaleString() : ""}
    </p>
  </div>
);
