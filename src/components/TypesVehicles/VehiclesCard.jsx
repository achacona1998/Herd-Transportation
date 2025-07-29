import { VehiclesConst } from "../../constants/TypesVehicles/items";

export const VehiclesCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 grid-cols-1 justify-items-center text-black">
      {VehiclesConst.map((vehicle, index) => (
        <div
          key={index}
          className="bg-green-100 flex flex-col p-5 rounded-xl border border-[#CFB53B]">
          <div className="mb-4">
            <img
              src={vehicle.img}
              alt={vehicle.name}
              className="w-full h-80 object-cover rounded-lg aspect-square"
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <vehicle.icon className="w-8 h-8 text-green-700" />
            <h5 className="text-3xl font-bold text-green-700">
              {vehicle.name}
            </h5>
          </div>

          <p className="font-normal text-gray-700 mb-4 text-lg">
            {vehicle.description}
          </p>

          <div className="mt-auto">
            <h6 className="font-semibold mb-2 text-xl">Features:</h6>
            <ul className="list-disc list-inside space-y-1 grid grid-cols-2">
              {vehicle.carct.map((feature, idx) => (
                <li key={idx} className="text-lg text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
