export const Item = ({ name, data }) => (
  <div className="flex items-center gap-3">
    <h3 className="text-xl font-semibold tracking-tight">{name} :</h3>
    <p className="text-gray-700 text-xl">{data}</p>
  </div>
);
