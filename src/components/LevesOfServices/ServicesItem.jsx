import { Asistencia, Ok } from "../../assets/icons/icons";

export const ServicesItem = ({ name, description, servicios }) => {
  return (
    <div className="py-6 sm:py-8 px-6 sm:px-8 md:px-12 items-center bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] flex flex-col justify-between rounded-xl border border-[#CFB53B] text-white">
      <div className="p-3 sm:p-4 border border-[#CFB53B] rounded-full flex justify-center items-center">
        <Asistencia className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-5">
        {name}
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-center my-4 sm:my-5 font-semibold">
        {description}
      </p>
      <ul className="flex flex-col gap-1 sm:gap-2 mb-6 sm:mb-8 mt-2 justify-start w-full">
        {servicios.map((servicio, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            {servicio && <Ok className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" />}
            {servicio}
          </li>
        ))}
      </ul>
    </div>
  );
};
