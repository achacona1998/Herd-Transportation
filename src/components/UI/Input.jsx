import { memo } from "react";

const Input = memo(({ label, value, onChange, ...props }) => {
  return (
    <div>
      <label className="block mb-2 font-semibold text-white">{label}</label>
      <input
        value={value}
        onChange={onChange}
        {...props}
        className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white"
      />
    </div>
  );
});

export default Input;
