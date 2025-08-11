import { Link } from "react-router-dom";

export const Info = ({ title, slogan, items }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
      <p className="text-base sm:text-lg">{slogan}</p>
      {/* <div>
        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          Síguenos
        </h4>
        <div className="flex space-x-3 sm:space-x-4">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="inline-block transition hover:scale-125 sm:hover:scale-150 hover:text-[#CFB53B] duration-300 ">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};
