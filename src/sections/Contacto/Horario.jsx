import { HorarioCard } from "../../components/Contacto/HorarioCard";
import Subheader from "../../components/UI/Subheader";
import { SECTION_SUBHEADERS } from "../../constants/headers";

const Horario = () => {
  return (
    <section className="text-white bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] border border-[#CFB53B] flex flex-col px-4 py-8 rounded-xl  items-center">
      <Subheader title={SECTION_SUBHEADERS.BUSINESS_HOURS.title} />
      <HorarioCard />

    </section>
  );
};

export default Horario;
