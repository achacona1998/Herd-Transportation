import { ServicesItemsConst } from "../../constants/LandingPage/items";
import { ServicesItem } from "./ServicesItem";

export const ServicesCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6">
      {ServicesItemsConst.map((item, index) => (
        <ServicesItem key={index} {...item} />
      ))}
    </div>
  );
};
