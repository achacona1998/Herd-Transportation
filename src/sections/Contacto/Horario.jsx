import { HorarioCard } from "../../components/Contacto/HorarioCard";
import Subheader from "../../components/UI/Subheader";

const Horario = () => {
  return (
    <section className="bg-green-100 flex flex-col px-4 py-8 rounded-xl border border-[#CFB53B] items-center">
      <Subheader title="Business Hours" />
      <HorarioCard />
      <div className="mt-10 p-4 bg-green-900 rounded-lg text-white">
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
