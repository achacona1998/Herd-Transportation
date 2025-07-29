import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";

const Ask = () => {
  const mail = () => {
    window.location.href = "mailto:info@herdtransportation.com";
  };
  const call = () => {
    window.location.href = "tel:+1234567890";
  };
  return (
    <section className="container mx-auto mt-10 bg-green-700 p-8 rounded-xl flex flex-col items-center text-white space-y-8">
      <h2 className="text-4xl font-bold">Not sure which vehicle you need?</h2>
      <p className="text-2xl text-center">
        Our team of experts can help you determine the best transportation
        option based on your specific needs.
        <br /> Contact us today for a personalized consultation.
      </p>

      <div className="flex justify-center items-center gap-8">
        <Button onClick={() => call()}>Call Now</Button>
        <Button onClick={() => mail()} variant="secondary">
          Schedule Consultation
        </Button>
      </div>
    </section>
  );
};

export default Ask;
