export const AboutItem = ({ name, value }) => (
  <div className="text-center px-2 sm:px-3">
    <h4 className="text-2xl sm:text-3xl font-bold text-[#1BAA6E]">{value}</h4>
    <p className="text-base sm:text-lg font-semibold">{name}</p>
  </div>
);
