import {
  Casa,
  CentroMedico,
  Hospital,
  Pointer,
} from "../../assets/icons/icons";
import { DetailArea } from "../../constants/CoverageArea/items";
import { InfoItem } from "./InfoItem";

export const InfoCard = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
      {DetailArea.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  );
};
