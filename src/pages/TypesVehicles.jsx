import Header from "../components/UI/Header";
import { PAGE_HEADERS } from "../constants/headers";
import Ask from "../sections/TypesVehicles/Ask";
import Vehicles from "../sections/TypesVehicles/Vehicles";

const TypesVehicles = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title={PAGE_HEADERS.VEHICLES.title}
        subtitle={PAGE_HEADERS.VEHICLES.subtitle}
      />
      <Vehicles />
      <Ask />
    </div>
  );
};

export default TypesVehicles;
