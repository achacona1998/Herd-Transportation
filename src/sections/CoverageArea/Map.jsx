import { MapCard } from "../../components/CoverageArea/MapCard";
import Subheader from "../../components/UI/Subheader";

const Map = () => {
  return (
    <section className="flex flex-col md:flex-row gap-8 pt-5 container mx-auto items-center md:items-start justify-center px-4 sm:px-6">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="./img/Coverage/Map.avif"
          alt="Map Image"
          loading="lazy"
          className="h-[300px] sm:h-[400px] md:h-[500px] rounded-md w-full object-cover md:object-contain"
        />
      </div>

      <div className="flex flex-col items-center md:w-1/2">
        <Subheader
          title="Area List"
          subtitle={
            <>
              Select an area to see more details <br className="hidden sm:block" /> about our services in
              that location.
            </>
          }
        />
        <MapCard />
      </div>
    </section>
  );
};

export default Map;
