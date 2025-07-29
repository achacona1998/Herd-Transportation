import { Bus } from "../../assets/icons/icons";
import { AreaConst } from "../../constants/CoverageArea/items";

export const MapCard = () => {
  return (
    <div className="space-y-6">
      {AreaConst.map((item, index) => (
        <div key={index} className="flex gap-3 justify-start items-center">
          <div className="p-2 rounded-full bg-green-800">
            <Bus className="w-5 h-5 text-white"/>
          </div>
          <div>
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-gray-600 text-sm -mt-1">{item.service}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
