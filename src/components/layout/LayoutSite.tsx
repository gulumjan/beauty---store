"use client";
import React, { FC, ReactNode, useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import scss from "./Layout.module.scss";
import Loader from "./loader/Loader";

interface ILayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSiteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={scss.LayoutSite}>
      {loading && <Loader />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
