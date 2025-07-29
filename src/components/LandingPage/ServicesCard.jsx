import { ServicesItemsConst } from "../../constants/LandingPage/items";
import { ServicesItem } from "./ServicesItem";

export const ServicesCard = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
      {ServicesItemsConst.map((item, index) => (
        <ServicesItem key={index} {...item} />
      ))}
    </div>
  );
};
