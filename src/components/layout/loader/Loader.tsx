"use client";
import React from "react";
import scss from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={scss.loaderContainer}>
      <div className={scss.loaderRing}>
        <div className={scss.loaderCircle}></div>
        <p className={scss.loadingText}> Beauty</p>
      </div>
    </div>
  );
};

export default Loader;
