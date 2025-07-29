import { MapCard } from "../../components/CoverageArea/MapCard";
import Subheader from "../../components/UI/Subheader";

const Map = () => {
  return (
    <section className="flex gap-5 pt-5 container mx-auto items-start justify-evenly">
      <div className="">
        <img
          src="./img/Coverage/Map.avif"
          alt="Map Image"
          loading="lazy"
          className="h-[500px] rounded-md "
        />
      </div>

      <div className="flex flex-col  items-center">
        <Subheader
          title="Area List"
          subtitle={
            <>
              Select an area to see more details <br /> about our services in
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
