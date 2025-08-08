import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Header from "../../components/UI/Header";
import { PAGE_HEADERS } from "../../constants/headers";

const MoreInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <Header
        title={PAGE_HEADERS.COVERAGE_MORE_INFO.title}
        subtitle={PAGE_HEADERS.COVERAGE_MORE_INFO.subtitle}
      />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
        <Button onClick={() => navigate("/contact")}>Contact Us</Button>
        <Button variant="secondary" onClick={() => navigate("/services")}>
          View Services
        </Button>
      </div>
    </section>
  );
};

export default MoreInfo;
