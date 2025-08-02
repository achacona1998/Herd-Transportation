const Header = ({ title, subtitle, className = "" }) => {
  return (
    <div
      className={`${className} mb-6 sm:mb-8 flex flex-col items-center justify-center px-4`}>
      <h1 className="mb-2 text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffffff]">{title}</h1>
      <p className="text-base sm:text-lg md:text-xl text-white text-center">{subtitle}</p>
    </div>
  );
};

export default Header;
