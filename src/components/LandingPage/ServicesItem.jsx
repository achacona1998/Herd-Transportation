import { Link } from "react-router-dom";

export const ServicesItem = ({ link, icon, name, description }) => (
  <Link
    to={link}
    className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] flex flex-col justify-between p-4 sm:p-5 rounded-xl border border-[#CFB53B] transition-transform duration-300 hover:scale-105 h-full">
    <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3 text-white transition-colors duration-300">
      <span className="flex-shrink-0">{icon}</span>
      <h4 className="text-lg sm:text-xl font-bold text-white">{name}</h4>
    </div>
    <p className="text-sm sm:text-md text-white font-semibold text-justify group-hover:text-white transition-colors duration-300">
      {description}
    </p>
  </Link>
);
