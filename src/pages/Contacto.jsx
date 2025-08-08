import Header from "../components/UI/Header";
import Form from "../sections/Contacto/Form";
import Horario from "../sections/Contacto/Horario";
import Info from "../sections/Contacto/Info";
import { PAGE_HEADERS } from "../constants/headers";

const Contact = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title={PAGE_HEADERS.CONTACT.title}
        subtitle={PAGE_HEADERS.CONTACT.subtitle}
      />
      <div className="grid pt-10 grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4 sm:px-6">
        <Form />
        <div className="space-y-8">
          <Info />
          <Horario />
        </div>
      </div>
    </div>
  );
};

export default Contact;
