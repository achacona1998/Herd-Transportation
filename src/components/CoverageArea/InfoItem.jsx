import {
  Casa,
  CentroMedico,
  Hospital,
  Pointer,
} from "../../assets/icons/icons";

export const InfoItem = ({ name }) => (
  <div className="bg-gradient-to-bl from-[#1BAA6E] to-[#0F3D2E] flex flex-col justify-between p-4 sm:p-5 rounded-xl border border-[#CFB53B] text-white">
    <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-3">
      <div className="p-1.5 sm:p-2 rounded-full border border-[#CFB53B]">
        <Pointer className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>
      <h4 className="text-lg sm:text-xl font-bold">{name}</h4>
    </div>
    <p className="text-sm sm:text-base font-semibold text-justify py-2 sm:py-3">
      Full coverage in the County, without any exception, full service .
    </p>
    <div className="flex items-center gap-2 pt-2">
      <Hospital className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="text-sm sm:text-base">All Hospitals</span>
    </div>
    <div className="flex items-center gap-2 pt-2">
      <CentroMedico className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="text-sm sm:text-base">All Medical Facilities</span>
    </div>
    <div className="flex items-center gap-2 pt-2">
      <Casa className="h-4 w-4 sm:h-5 sm:w-5" />
      <span className="text-sm sm:text-base">All Level of Services </span>
    </div>
  </div>
);
