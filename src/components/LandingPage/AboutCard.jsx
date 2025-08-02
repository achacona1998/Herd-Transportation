import { AboutItemsConst } from "../../constants/LandingPage/items";
import { AboutItem } from "./AboutItems";

export const AboutCard = () => {
  return (
    <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 justify-center">
      {AboutItemsConst.map((item, index) => (
        <AboutItem key={index} {...item} />
      ))}
    </div>
  );
};
