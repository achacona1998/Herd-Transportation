import Header from "../components/UI/Header";
import Ask from "../sections/Trips/Ask";
import TripsSesion from "../sections/Trips/TripsSesion";
import { PAGE_HEADERS } from "../constants/headers";

const Trips = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title={PAGE_HEADERS.TRIPS.title}
        subtitle={PAGE_HEADERS.TRIPS.subtitle}
      />
      <TripsSesion />
      <Ask />
    </div>
  );
};

export default Trips;
