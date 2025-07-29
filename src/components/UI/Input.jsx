import { memo } from "react";

const Input = memo(({ label, value, onChange, ...props }) => {
  return (
    <div>
      <label className="block mb-2 font-semibold text-gray-700">{label}</label>
      <input
        value={value}
        onChange={onChange}
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 mb-4 text-black"
      />
    </div>
  );
});

export default Input;
