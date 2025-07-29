import { AboutItemsConst } from "../../constants/LandingPage/items";

export const AboutCard = () => {
  return (
    <div className="flex gap-12 justify-center">
      {AboutItemsConst.map((item, index) => (
        <div key={index} className="text-center">
          <h4 className="text-3xl font-bold text-green-600 mb-2">
            {item.value}
          </h4>
          <p className="text-md text-gray-600  font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
