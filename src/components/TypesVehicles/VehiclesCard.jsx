import { VehiclesConst } from "../../constants/TypesVehicles/items";
import { VehiclesItem } from "./VehiclesItem";

export const VehiclesCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center text-black">
      {VehiclesConst.map((vehicle, index) => (
        <VehiclesItem key={index} {...vehicle} />
      ))}
    </div>
  );
};
