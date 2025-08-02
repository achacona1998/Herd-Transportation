import Header from "../components/UI/Header";
import Info from "../sections/CoverageArea/Info";
import Map from "../sections/CoverageArea/Map";
import MoreInfo from "../sections/CoverageArea/MoreInfo";

const CoverageArea = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10">
      <Header
        title="Coverage Areas"
        subtitle={
          <>
            Herd Transportation offers reliable services in multiple areas of
            Miami and its surroundings.
            <br className="hidden sm:block" />
            Explore our interactive map to see where we operate.
          </>
        }
      />
      <Map />
      <Info />
      <MoreInfo />
    </div>
  );
};

export default CoverageArea;
