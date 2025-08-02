import { HorarioCard } from "../../components/Contacto/HorarioCard";
import Subheader from "../../components/UI/Subheader";

const Horario = () => {
  return (
    <section className="text-white bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] border border-[#CFB53B] flex flex-col px-4 py-8 rounded-xl  items-center">
      <Subheader title="Business Hours" />
      <HorarioCard />
      <div className="mt-10 p-4 bg-[#0F3D2E] rounded-lg text-white border border-[#CFB53B]">
        <p className="text-md">
          For emergencies or urgent bookings outside office
          <br />
          hours, call our emergency number:
          <span className="font-bold pl-2">(305) 555-9911</span>
        </p>
      </div>
    </section>
  );
};

export default Horario;
