"use client";
import { FC } from "react";
import scss from "./Collection.module.scss";
import { images } from "@/constants/links";

const Collection: FC = () => {
  return (
    <section id="collection" className={scss.Collection}>
      <div className="container">
        <h2 className={scss.title}>Shop Our IG</h2>
        <div className={scss.grid}>
          {images.map((src, index) => (
            <div key={index} className={scss["grid-item"]}>
              <img src={src} alt={`Collection image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
