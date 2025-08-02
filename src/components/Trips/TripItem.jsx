import { Ok } from "../../assets/icons/icons";

export const TripItem = ({ name, description, carct, img }) => (
  <div className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] flex flex-col p-4 sm:p-5 md:p-6 rounded-xl border border-[#CFB53B] text-white">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{name}</h3>
    <p className="font-normal mb-3 sm:mb-4 text-base sm:text-lg">{description}</p>

    <div className="space-y-1 sm:space-y-2">
      {carct.map((characteristic, index) => (
        <div key={index} className="text-base sm:text-lg flex gap-1 sm:gap-2 items-center">
          <Ok className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 mt-0.5" />
          <span>{characteristic}</span>
        </div>
      ))}
    </div>

    <img
      src={img}
      alt={name}
      className="w-full h-auto object-contain mt-3 sm:mt-4 rounded-b-xl max-h-48 sm:max-h-56 md:max-h-64"
    />
  </div>
);
