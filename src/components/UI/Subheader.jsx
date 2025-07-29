const Subheader = ({ title, subtitle }) => {
  return (
    <div className="mb-8 flex flex-col items-center justify-center text-green-700">
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <p className="text-lg text-gray-600 text-center">{subtitle}</p>
    </div>
  );
};

export default Subheader;
