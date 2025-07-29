import { Link } from "react-router-dom";

export const Info = ({ title, slogan, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-lg">{slogan}</p>
      <div>
        <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
        <div className="flex space-x-4">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:text-gray-400 text-white text-lg">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-7 h-7"/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
