import React, { FC } from "react";
import scss from "./Star.module.scss";

interface StarProps {
  count: number;
}

const Star: FC<StarProps> = ({ count }) => {
  const stars = Array(count).fill(0);

  return (
    <div className={scss["star-rating"]}>
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={scss["star"]}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default Star;
