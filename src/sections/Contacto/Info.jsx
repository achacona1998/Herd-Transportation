import { InfoCard } from "../../components/Contacto/InfoCard";
import Subheader from "../../components/UI/Subheader";

const Info = () => {
  return (
    <section className="bg-green-100 flex flex-col px-4 py-8 rounded-xl border border-[#CFB53B] items-center">
      <Subheader title="Contact Information" />
      <InfoCard />
    </section>
  );
};

export default Info;
