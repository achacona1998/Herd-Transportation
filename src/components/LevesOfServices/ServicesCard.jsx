import { useNavigate } from "react-router-dom";
import { Asistencia, Ok } from "../../assets/icons/icons";
import { ServicesConst } from "../../constants/LevesOfServices/items";
import Button from "../UI/Button";

export const ServicesCard = () => {
  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-3 gap-8  grid-cols-1 justify-items-center text-black">
      {ServicesConst.map((item, index) => (
        <div
          key={index}
          className="bg-green-100 flex flex-col justify-between py-8 px-12 rounded-xl items-center border border-amber-600">
          <div className="p-4 bg-green-700 rounded-full flex justify-center items-center">
            <Asistencia className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold mt-5">{item.name}</h3>
          <p className="text-xl text-center my-5 font-semibold text-gray-800">
            {item.description}
          </p>
          <ul className="flex flex-col gap-2 mb-8 mt-2 justify-start w-full">
            {item.servicios.map((servicio, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-lg text-gray-800">
                <Ok className="w-4 h-4 rounded-full" />
                {servicio}
              </li>
            ))}
          </ul>
          <Button className="w-full" onClick={() => navigate(`${item.link}`)}>
            {item.boton}
          </Button>
        </div>
      ))}
    </div>
  );
};
