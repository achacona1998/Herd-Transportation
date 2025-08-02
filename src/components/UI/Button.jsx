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
        "px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-white rounded-md bg-gradient-to-t from-[#1BAA6E] to-[#0F3D2E] hover:scale-105 sm:hover:scale-110 ring-[#CFB53B] ring-1 transition-transform duration-300 text-sm sm:text-base flex items-center justify-center",
      secondary:
        "px-3 sm:px-4 py-1.5 sm:py-2 font-semibold text-white rounded-md bg-gradient-to-t from-[#0F3D2E] to-[#1BAA6E] hover:scale-105 sm:hover:scale-110 ring-[#CFB53B] ring-1 transition-transform duration-300 text-sm sm:text-base flex items-center justify-center",
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
