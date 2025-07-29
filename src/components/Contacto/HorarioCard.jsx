import { horarioConst } from "../../constants/Contacto/items";
import { Item } from "./Item";

export const HorarioCard = () => {
  return (
    <div className="space-y-4">
      {horarioConst.map((items, index) => (
        <Item key={index} {...items} />
      ))}
    </div>
  );
};
