import Button from "../../components/UI/Button";
import Header from "../../components/UI/Header";

const ServicesPersonalized = () => {
  return (
    <section className="container mx-auto mt-10 bg-green-700 p-8 rounded-xl grid-cols-2 grid gap-8">
      <div className="flex flex-col justify-between">
        <Header
          title="Personalized Service for Every Need"
          className="items-start text-white"
        />
        <div>
          <p className="text-xl text-white py-5">
            At Herd Transportation, we understand that each passenger has unique
            needs. Our team is prepared to offer solutions adapted to each
            situation, always guaranteeing maximum comfort and safety.
          </p>
          <p className="text-xl text-white py-5">
            Contact us to discuss your specific needs and find the service level
            that best suits you or your loved one.
          </p>
          <Button variant="secondary">Request Free Consultation</Button>
        </div>
      </div>
      <div className="flex justify-end ">
        <img
          src="./img/Services/servicio.avif"
          alt="Personalized Service for Every Need"
          loading="lazy"
          className="h-[400px] rounded-xl"
        />
      </div>
    </section>
  );
};

export default ServicesPersonalized;
