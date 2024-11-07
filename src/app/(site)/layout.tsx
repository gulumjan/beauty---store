import LayoutSite from "@/components/layout/LayoutSite";
import React, { FC, ReactNode } from "react";
interface LayoutType {
  children: ReactNode;
}
const Layout: FC<LayoutType> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};

export default Layout;
