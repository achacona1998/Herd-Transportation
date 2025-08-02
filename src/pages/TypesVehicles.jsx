import Header from "../components/UI/Header";
import Ask from "../sections/TypesVehicles/Ask";
import Vehicles from "../sections/TypesVehicles/Vehicles";

const TypesVehicles = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title="Our Vehicle Fleet"
        subtitle={
          <>
            We offer a variety of transportation options tailored to your
            specific needs,
            <br className="hidden sm:block" /> from regular cars to specialized ambulances.
          </>
        }
      />
      <Vehicles />
      <Ask />
    </div>
  );
};

export default TypesVehicles;
