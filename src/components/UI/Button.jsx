import { memo } from "react";

const Button = memo(
  ({
    children,
    type = "button",
    variant = "primary",
    onClick,
    disabled = false,
    className = "",
    ...props
  }) => {
    const variatClass = {
      primary:
        "px-4 py-2 font-semibold text-white rounded-md transition duration-300 bg-green-900 hover:bg-green-700",
      secondary:
        "px-4 py-2 text-green-700 bg-gray-300 rounded-md transition duration-300 hover:bg-gray-500 hover:text-green-300 font-semibold",
    };
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${variatClass[variant]} ${className}`}
        {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
