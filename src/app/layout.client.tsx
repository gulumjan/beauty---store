"use client";
import ReduxProvider from "@/provider/ReduxProvider";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";

interface iRootLayoutProps {
  children: ReactNode;
  session: Session | null;
}

const LayoutClient: FC<iRootLayoutProps> = ({ children, session }) => {
  return (
    <>
      <SessionProvider session={session}>
        <ReduxProvider>{children}</ReduxProvider>
      </SessionProvider>
    </>
  );
};

export default LayoutClient;
