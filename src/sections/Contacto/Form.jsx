import { useState } from "react";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Subheader from "../../components/UI/Subheader";

const Form = () => {
  const [formType, setFormType] = useState("contact"); // 'contact' or 'career'
  const careerFormData = {
    fullName: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: "",
  };
  const contactFormData = {
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };
  const [careerData, setCareerData] = useState(careerFormData);
  const [formData, setFormData] = useState(contactFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCareerChange = (e) => {
    const { name, value } = e.target;
    setCareerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      ("Error al iniciar sesión");
    }
  };
  const handleCareerSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      console.error("Error submitting career application");
    }
  };

  const handleReset = () => {
    setFormData(formData);
  };
  const handleCareerReset = () => {
    setCareerData(careerFormData);
  };

  return (
    <section className="w-full">
      <form
        className="bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] p-4 sm:p-5 md:p-6 rounded-xl border border-[#CFB53B] w-full"
        onSubmit={formType === "contact" ? handleSubmit : handleCareerSubmit}>
        <Subheader
          title={formType === "contact" ? "Contact Form" : "Career Form"}
        />
        <div className="flex flex-col sm:flex-row justify-center mb-6 -mt-6 gap-3 sm:gap-4 md:gap-6">
          <Button
            variant={formType === "contact" ? "primary" : "secondary"}
            onClick={() => setFormType("contact")}
            className="w-full sm:w-auto">
            Contact Form
          </Button>
          <Button
            variant={formType === "career" ? "primary" : "secondary"}
            onClick={() => setFormType("career")}
            className="w-full sm:w-auto">
            Career Form
          </Button>
        </div>
        <Input
          label="Full Name"
          value={
            formType === "contact" ? formData.fullName : careerData.fullName
          }
          onChange={formType === "contact" ? handleChange : handleCareerChange}
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          required
        />
        <Input
          label="Phone Number"
          value={formType === "contact" ? formData.phone : careerData.phone}
          onChange={formType === "contact" ? handleChange : handleCareerChange}
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          required
        />
        <Input
          label="Email"
          value={formType === "contact" ? formData.email : careerData.email}
          onChange={formType === "contact" ? handleChange : handleCareerChange}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />

        {formType === "contact" ? (
          <>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block mb-2 font-semibold text-white">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white"
                value={formData.subject}
                onChange={handleChange}
                required>
                <option className="text-gray-600" value="">Select a subject</option>
                <option className="text-black" value="consulta">General Inquiry</option>
                <option className="text-black" value="cotizacion">Quote Request</option>
                <option className="text-black" value="reclamo">Complaint</option>
                <option className="text-black" value="otro">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white"
                value={formData.message}
                onChange={handleChange}
                required></textarea>
            </div>
          </>
        ) : (
          <>
            <Input
              label="Position"
              value={careerData.position}
              onChange={handleCareerChange}
              type="text"
              name="position"
              id="position"
              placeholder="Desired Position"
              required
            />
            <Input
              label="Years of Experience"
              value={careerData.experience}
              onChange={handleCareerChange}
              type="number"
              name="experience"
              id="experience"
              placeholder="Years of Experience"
              required
            />
            <Input
              label="Resume"
              onChange={handleCareerChange}
              type="file"
              name="resume"
              id="resume"
              accept=".pdf,.doc,.docx"
              required
            />
            <div className="mb-4">
              <label
                htmlFor="coverLetter"
                className="block text-white font-medium mb-2">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="4"
                className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white"
                value={careerData.coverLetter}
                onChange={handleCareerChange}
                required></textarea>
            </div>
          </>
        )}

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center sm:justify-end">
          <Button type="submit" className="w-full sm:w-auto">
            {formType === "contact" ? "Send Message" : "Submit Application"}
          </Button>
          <Button
            variant="secondary"
            onClick={formType === "contact" ? handleReset : handleCareerReset}
            className="w-full sm:w-auto">
            Reset
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
