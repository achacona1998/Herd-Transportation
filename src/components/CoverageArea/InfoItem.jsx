import {
  Casa,
  CentroMedico,
  Hospital,
  Pointer,
} from "../../assets/icons/icons";

export const InfoItem = ({
  name,
  description,
  hospitales,
  centros,
  servicio,
}) => (
  <div className="bg-green-100 flex flex-col justify-between p-5 rounded-xl  border border-[#CFB53B] ">
    <div className="flex items-center gap-3 text-green-700 pb-3 ">
      <div className="p-2 rounded-full bg-green-800">
        <Pointer className="w-5 h-5 text-white" />
      </div>
      <h4 className="text-xl font-bold ">{name}</h4>
    </div>
    <p className="text-md text-black  font-semibold text-justify py-3">
      {description}
    </p>
    <div className="flex items-center gap-2 pt-2">
      <Hospital className="h-5 w-5 text-green-700" />
      {hospitales}
    </div>
    <div className="flex items-center gap-2 pt-2">
      <CentroMedico className="h-5 w-5 text-green-700" />
      {centros}
    </div>
    <div className="flex items-center gap-2 pt-2">
      <Casa className="h-5 w-5 text-green-700" />
      {servicio}
    </div>
  </div>
);
