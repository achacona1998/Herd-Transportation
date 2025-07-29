import Header from "../components/UI/Header";
import Ask from "../sections/TypesVehicles/Ask";
import Vehicles from "../sections/TypesVehicles/Vehicles";

const TypesVehicles = () => {
  return (
    <div className="min-h-screen pt-8">
      <Header
        title="Our Vehicle Fleet"
        subtitle={
          <>
            We offer a variety of transportation options tailored to your
            specific needs,
            <br /> from regular cars to specialized ambulances.
          </>
        }
      />
      <Vehicles />
      <Ask />
    </div>
  );
};

export default TypesVehicles;
