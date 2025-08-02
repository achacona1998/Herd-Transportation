import { Link } from "react-router-dom";

export const Card = ({ title, items }) => {
  return (
    <div>
      <h4 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 items-center">
            {item.icon && (
              <span className="h-2 w-2 bg-amber-50">{item.icon}</span>
            )}
            {item.link ? (
              <Link
                to={item.link}
                className="hover:text-[#CFB53B] text-white text-base sm:text-lg transition-colors duration-200">
                {item.name}
              </Link>
            ) : (
              <span className="text-white text-base sm:text-lg">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
