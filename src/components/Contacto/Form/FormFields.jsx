import Input from "../../UI/Input";

const subjects = [
  { value: "", label: "Select a subject" },
  { value: "consulta", label: "General Inquiry" },
  { value: "cotizacion", label: "Quote Request" },
  { value: "reclamo", label: "Complaint" },
  { value: "otro", label: "Other" },
];

const FormFields = ({ formType, formData, onChange }) => {
  if (!formData) return null;

  return (
    <>
      {/* Campos comunes */}
      <Input
        label="Full Name"
        name="fullName"
        id="fullName"
        type="text"
        placeholder="Full Name"
        required
        value={formData.fullName}
        onChange={onChange}
      />
      <Input
        label="Phone Number"
        name="phone"
        id="phone"
        type="tel"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={onChange}
      />
      <Input
        label="Email"
        name="email"
        id="email"
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={onChange}
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
              required
              value={formData.subject}
              onChange={onChange}
              className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white bg-transparent">
              {subjects.map(({ value, label }) => (
                <option
                  key={value}
                  value={value}
                  className={value ? "text-black" : "text-gray-600"}>
                  {label}
                </option>
              ))}
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
              rows={4}
              placeholder="Message"
              required
              className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white bg-transparent resize-y"
              value={formData.message}
              onChange={onChange}
            />
          </div>
        </>
      ) : (
        <>
          <Input
            label="Position"
            name="position"
            id="position"
            type="text"
            placeholder="Desired Position"
            required
            value={formData.position}
            onChange={onChange}
          />
          <Input
            label="Years of Experience"
            name="experience"
            id="experience"
            type="number"
            min="0"
            placeholder="Years of Experience"
            required
            value={formData.experience}
            onChange={onChange}
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
              rows={4}
              placeholder="Cover Letter"
              required
              className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white bg-transparent resize-y"
              value={formData.coverLetter}
              onChange={onChange}
            />
          </div>


        </>
      )}
    </>
  );
};

export default FormFields;
