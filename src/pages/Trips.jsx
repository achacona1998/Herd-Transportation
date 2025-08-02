import Header from "../components/UI/Header";
import Ask from "../sections/Trips/Ask";
import TripsSesion from "../sections/Trips/TripsSesion";

const Trips = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title="Travel Modalities"
        subtitle="We offer various transportation options adapted to your specific needs. Learn about our modalities and choose the one that best suits your situation."
      />
      <TripsSesion />
      <Ask />
    </div>
  );
};

export default Trips;
