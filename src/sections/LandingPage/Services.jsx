import { ServicesCard } from "../../components/LandingPage/ServicesCard";
import Header from "../../components/UI/Header";

const Services = () => {
  return (
    <section className=" pt-20">
      <div className="container mx-auto ">
        <Header
          title="What do we offer?"
          subtitle={
            <>
              We offer safe and reliable transportation solutions tailored to
              the needs
              <br />
              of seniors and people with reduced mobility.
            </>
          }
        />

        <ServicesCard />
      </div>
    </section>
  );
};

export default Services;
