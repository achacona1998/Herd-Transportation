import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Header from "../../components/UI/Header";

const MoreInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto pt-10">
      <Header
        title="Need more information?"
        subtitle="If you have questions about our coverage areas or need to confirm if we provide service in your location, don't hesitate to contact us."
      />
      <div className="flex justify-center gap-8">
        <Button onClick={() => navigate("/contact")}>Contact Us</Button>
        <Button variant="secondary" onClick={() => navigate("/services")}>
          View Services
        </Button>
      </div>
    </section>
  );
};

export default MoreInfo;
