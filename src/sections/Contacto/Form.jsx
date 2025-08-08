import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import GoogleAuth from "../../components/Contacto/Form/GoogleAuth";
import Subheader from "../../components/UI/Subheader";
import { SECTION_SUBHEADERS } from "../../constants/headers";
import Button from "../../components/UI/Button";
import FormFields from "../../components/Contacto/Form/FormFields";
import FormStatus from "../../components/Contacto/Form/FormStatus";

const initialContactData = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const initialCareerData = {
  fullName: "",
  phone: "",
  email: "",
  position: "",
  experience: "",
  coverLetter: "",
};

const Form = () => {
  const [formType, setFormType] = useState("contact");
  const [contactData, setContactData] = useState(initialContactData);
  const [careerData, setCareerData] = useState(initialCareerData);
  const [googleUser, setGoogleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Autorrellenar con user de Google al cambiar formType o googleUser
  useEffect(() => {
    if (!googleUser) return;
    if (formType === "contact") {
      setContactData((prev) => ({
        ...prev,
        fullName: googleUser.name || prev.fullName,
        email: googleUser.email || prev.email,
      }));
    } else {
      setCareerData((prev) => ({
        ...prev,
        fullName: googleUser.name || prev.fullName,
        email: googleUser.email || prev.email,
      }));
    }
  }, [googleUser, formType]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (formType === "contact") {
      setContactData((prev) => ({ ...prev, [name]: value }));
    } else {
      setCareerData((prev) => ({
        ...prev,
        [name]: type === "file" ? files[0] || null : value,
      }));
    }
  };

  const validateForm = () => {
    if (formType === "contact") {
      const { fullName, phone, email, subject, message } = contactData;
      if (!fullName || !phone || !email || !subject || !message) {
        setStatus({
          type: "error",
          message: "Complete todos los campos obligatorios.",
        });
        return false;
      }
      // Puedes agregar validaciones más específicas aquí
    } else {
      const { fullName, phone, email, position, experience, coverLetter } =
        careerData;
      if (
        !fullName ||
        !phone ||
        !email ||
        !position ||
        !experience ||
        !coverLetter
      ) {
        setStatus({
          type: "error",
          message: "Complete todos los campos obligatorios.",
        });
        return false;
      }
      if (isNaN(experience) || Number(experience) < 0) {
        setStatus({
          type: "error",
          message: "La experiencia debe ser un número válido y positivo.",
        });
        return false;
      }
    }
    setStatus({ type: "", message: "" });
    return true;
  };

  const handleReset = () => {
    if (formType === "contact") {
      setContactData(initialContactData);
    } else {
      setCareerData(initialCareerData);
    }
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      if (formType === "contact") {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
          contactData,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
      } else {
        // Para career usamos sendForm con el form completo para soporte archivo
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
      }
      setStatus({ type: "success", message: "Mensaje enviado correctamente." });
      handleReset();
    } catch (error) {
      setStatus({
        type: "error",
        message: `Error: ${error.text || error.message || "Error desconocido"}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full relative">
      {!googleUser && (
        <div className="absolute inset-0 bg-white/40 rounded-xl flex justify-center items-center z-20">
          <GoogleAuth onLogin={setGoogleUser} />
        </div>
      )}

      <Subheader
        title={
          formType === "contact"
            ? SECTION_SUBHEADERS.CONTACT_FORM.title
            : SECTION_SUBHEADERS.CAREER_FORM.title
        }
      />

      <div className="flex flex-col sm:flex-row justify-center mb-6 -mt-6 gap-3 sm:gap-4 md:gap-6">
        <Button
          variant={formType === "contact" ? "primary" : "secondary"}
          onClick={() => setFormType("contact")}
          className="w-full sm:w-auto"
          disabled={formType === "contact"}>
          Contact Form
        </Button>
        <Button
          variant={formType === "career" ? "primary" : "secondary"}
          onClick={() => setFormType("career")}
          className="w-full sm:w-auto"
          disabled={formType === "career"}>
          Career Form
        </Button>
      </div>

      <form
        onSubmit={handleSubmit}
        encType={formType === "career" ? "multipart/form-data" : undefined}
        className="relative bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] p-4 sm:p-5 md:p-6 rounded-xl border border-[#CFB53B]"
        noValidate>
        <FormFields
          formType={formType}
          formData={formType === "contact" ? contactData : careerData}
          onChange={handleChange}
        />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center sm:justify-end">
          <Button type="submit" disabled={loading || !googleUser}>
            {loading
              ? formType === "contact"
                ? "Sending..."
                : "Submitting..."
              : formType === "contact"
              ? "Send Message"
              : "Submit Application"}
          </Button>
          <Button variant="secondary" onClick={handleReset} type="button">
            Reset
          </Button>
        </div>
        <FormStatus status={status} />
      </form>
    </section>
  );
};

export default Form;
