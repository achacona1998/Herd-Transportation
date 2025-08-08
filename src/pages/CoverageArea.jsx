import Header from "../components/UI/Header";
import { PAGE_HEADERS } from "../constants/headers";
import Info from "../sections/CoverageArea/Info";
import Map from "../sections/CoverageArea/map";
import MoreInfo from "../sections/CoverageArea/MoreInfo";

const CoverageArea = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10">
      <Header
        title={PAGE_HEADERS.COVERAGE_AREA.title}
        subtitle={PAGE_HEADERS.COVERAGE_AREA.subtitle}
      />
      <Map />
      <Info />
      <MoreInfo />
    </div>
  );
};

export default CoverageArea;
