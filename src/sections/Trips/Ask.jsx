import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";

const Ask = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto mt-8 sm:mt-10 md:mt-12">
      <div className="mx-4 sm:mx-6 bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] border border-[#CFB53B] p-6 sm:p-8 rounded-xl flex flex-col items-center text-white space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1BAA6E]">
          Not sure which option to choose?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-center">
          Our customer service team is available to help you select the option
          that best fits your specific needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto">
          <Button
            onClick={() => navigate("/")}
            variant="secondary"
            className="w-full sm:w-auto">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ask;
