import { ServicesConst } from "../../constants/LevesOfServices/items";
import { ServicesItem } from "./ServicesItem";

export const ServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center text-black">
      {ServicesConst.map((item, index) => (
        <ServicesItem key={index} {...item} />
      ))}
    </div>
  );
};
