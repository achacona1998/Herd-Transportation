const Subheader = ({ title, subtitle }) => {
  return (
    <div className="mb-6 sm:mb-8 flex flex-col items-center justify-center text-green-700 px-4">
      <h1 className="mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-[#ffffff]">{title}</h1>
      <p className="text-base sm:text-lg text-white text-center">{subtitle}</p>
    </div>
  );
};

export default Subheader;
