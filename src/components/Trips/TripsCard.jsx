import { Ok } from "../../assets/icons/icons";
import { TripsConst } from "../../constants/Trips/items";

export const TripsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {TripsConst.map((item, index) => (
        <div
          className="bg-green-100 flex flex-col p-5 rounded-xl border border-[#CFB53B]"
          key={index}>
          <h3 className="text-3xl font-bold text-green-700 mb-2">
            {item.name}
          </h3>

          <p className="font-normal text-gray-700 mb-4 text-lg">
            {item.description}
          </p>

          <div className="space-y-2">
            {item.carct.map((characteristic, index) => (
              <div
                key={index}
                className="text-lg text-gray-600 flex gap-1 items-center">
                <Ok className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">{characteristic}</span>
              </div>
            ))}
          </div>

          <img
            src={item.img}
            alt={item.name}
            className="w-full h-48 object-cover mt-4 rounded-b-xl object-center"
          />
        </div>
      ))}
    </div>
  );
};
