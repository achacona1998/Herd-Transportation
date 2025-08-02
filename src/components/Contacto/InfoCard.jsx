import { infoConst } from "../../constants/Contacto/items";

import { Item } from "./Item";

export const InfoCard = () => {
  return (
    <div className="space-y-4 ">
      {infoConst.map((items, index) => (
        <Item key={index} {...items} />
      ))}
    </div>
  );
};
