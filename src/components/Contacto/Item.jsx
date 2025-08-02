export const Item = ({ name, data }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 text-white">
    <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{name} :</h3>
    <p className="text-base sm:text-lg md:text-xl">{data}</p>
  </div>
);
