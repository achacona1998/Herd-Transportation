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
    <section className="">
      <form
        className="bg-green-100 p-6 rounded-xl border border-[#CFB53B]"
        onSubmit={formType === "contact" ? handleSubmit : handleCareerSubmit}>
        <Subheader
          title={formType === "contact" ? "Contact Form" : "Career Form"}
        />
        <div className="flex justify-center mb-6 -mt-6">
          <Button
            variant={formType === "contact" ? "primary" : "secondary"}
            onClick={() => setFormType("contact")}
            className="mr-2">
            Contact Form
          </Button>
          <Button
            variant={formType === "career" ? "primary" : "secondary"}
            onClick={() => setFormType("career")}>
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
                className="block mb-2 font-semibold text-gray-700">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 mb-4 text-black"
                value={formData.subject}
                onChange={handleChange}
                required>
                <option value="">Select a subject</option>
                <option value="consulta">General Inquiry</option>
                <option value="cotizacion">Quote Request</option>
                <option value="reclamo">Complaint</option>
                <option value="otro">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 mb-4 text-black"
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
                className="block text-gray-700 font-medium mb-2">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 mb-4 text-black"
                value={careerData.coverLetter}
                onChange={handleCareerChange}
                required></textarea>
            </div>
          </>
        )}

        <div className="flex gap-4 items-center justify-end">
          <Button type="submit">
            {formType === "contact" ? "Send Message" : "Submit Application"}
          </Button>
          <Button
            variant="secondary"
            onClick={formType === "contact" ? handleReset : handleCareerReset}>
            Reset
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
