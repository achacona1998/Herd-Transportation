import { Link } from "react-router-dom";

export const Card = ({ title, items }) => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 items-center">
            {item.icon && (
              <span className="h-2 w-2 bg-amber-50">{item.icon}</span>
            )}
            {item.link ? (
              <Link
                to={item.link}
                className="hover:text-gray-400 text-white text-lg">
                {item.name}
              </Link>
            ) : (
              <span
                to={item.link}
                className="hover:text-gray-400 text-white text-lg">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
