import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Header from "../../components/UI/Header";
import { PAGE_HEADERS } from "../../constants/headers";

const ServicesPersonalized = () => {
   const navigate = useNavigate();
  return (
    <section className="container mx-auto mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] border border-[#CFB53B] p-6 sm:p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div className="flex flex-col justify-between">
        <Header
          title={PAGE_HEADERS.SERVICE_PERSONALIZED.title}
          className="items-start text-white"
        />
        <div>
          <p className="text-base sm:text-lg md:text-xl text-white py-3 sm:py-5">
            At Herd Transportation, we understand that each passenger has unique
            needs. Our team is prepared to offer solutions adapted to each
            situation, always guaranteeing maximum comfort and safety.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white py-3 sm:py-5">
            Contact us to discuss your specific needs and find the service level
            that best suits you or your loved one.
          </p>
          <Button variant="secondary" onClick={()=>navigate("/contact")}>Request Free Consultation</Button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-4 md:mt-0">
        <img
          src="./img/Services/servicio.avif"
          alt="Personalized Service for Every Need"
          loading="lazy"
          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default ServicesPersonalized;
