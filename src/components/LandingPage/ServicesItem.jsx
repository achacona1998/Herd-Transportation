import { Link } from "react-router-dom";

export const ServicesItem = ({ link, icon, name, description }) => (
  <Link
    to={link}
    className="bg-green-100 flex flex-col justify-between p-5 rounded-xl  border border-[#CFB53B] hover:bg-green-900 group transition-colors duration-300">
    <div className="flex items-center gap-3 text-green-700 pb-3 group-hover:text-white transition-colors duration-300">
      {icon}
      <h4 className="text-xl font-bold ">{name}</h4>
    </div>
    <p className="text-md text-black  font-semibold text-justify group-hover:text-white transition-colors duration-300">
      {description}
    </p>
  </Link>
);
