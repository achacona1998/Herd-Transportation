import { StarEmpty, StarFull, StarMiddle } from "../../assets/icons/icons";

export const Rating = (value) => {
  return [...Array(5)].map((_, i) => {
    if (i < value) {
      return <StarFull key={i} className="w-4 h-4 " />;
    } else if (i === Math.floor(value) && value % 1 !== 0) {
      return <StarMiddle key={i} className="w-4 h-4" />;
    } else {
      return <StarEmpty key={i} className="w-4 h-4" />;
    }
  });
};
