import { AreaConst } from "../../constants/CoverageArea/items";
import { InfoItem } from "./InfoItem";

export const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
      {AreaConst.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  );
};
