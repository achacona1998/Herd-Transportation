import { Bus } from "../../assets/icons/icons";
import { AreaConst } from "../../constants/CoverageArea/items";

export const MapCard = () => {
  return (
    <div className="space-y-4 sm:space-y-6 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6 w-full max-w-lg">
      {AreaConst.map((item, index) => (
        <div key={index} className="flex gap-2 sm:gap-3 justify-start items-center">
          <div className="p-1.5 sm:p-2 rounded-full border-[#CFB53B] border">
            <Bus className="w-4 h-4 sm:w-5 sm:h-5 text-white"/>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">{item.name}</h4>
            <p className="text-xs sm:text-sm -mt-0.5 sm:-mt-1">{item.service}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
