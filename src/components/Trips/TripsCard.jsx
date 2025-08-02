import { TripsConst } from "../../constants/Trips/items";
import { TripItem } from "./TripItem";

export const TripsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {TripsConst.map((item, index) => (
        <TripItem key={index} {...item} />
      ))}
    </div>
  );
};
