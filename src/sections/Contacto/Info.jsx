import { InfoCard } from "../../components/Contacto/InfoCard";
import Subheader from "../../components/UI/Subheader";
import { SECTION_SUBHEADERS } from "../../constants/headers";

const Info = () => {
  return (
    <section className="text-white bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] border border-[#CFB53B] flex flex-col px-4 py-8 rounded-xl  items-center">
      <Subheader title={SECTION_SUBHEADERS.CONTACT_INFO.title} />
      <InfoCard />
    </section>
  );
};

export default Info;
