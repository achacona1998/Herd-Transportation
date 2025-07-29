import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";

const Ask = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto mt-10 bg-green-700 p-8 rounded-xl flex flex-col items-center text-white space-y-8">
      <h2 className="text-4xl font-bold">Not sure which option to choose?</h2>
      <p className="text-2xl text-center">
        Our customer service team is available to help you select the option
        that best fits your specific needs.
      </p>

      <div className="flex justify-center items-center gap-8">
        <Button onClick={() => navigate("/testimonials")}>
          Read Testimonials
        </Button>
        <Button onClick={() => navigate("/")} variant="secondary">
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default Ask;
