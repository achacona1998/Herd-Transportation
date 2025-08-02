import Header from "../components/UI/Header";
import Form from "../sections/Contacto/Form";
import Horario from "../sections/Contacto/Horario";
import Info from "../sections/Contacto/Info";

const Contact = () => {
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title="Contact Us"
        subtitle={
          <>
            {" "}
            We're here to answer your questions about our transportation
            services. <br />
            Fill out the form below and we'll get back to you as soon as
            possible.
          </>
        }
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
