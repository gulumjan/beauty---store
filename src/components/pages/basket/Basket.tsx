"use client";
import { useSession } from "next-auth/react";
import { useGetUserQuery } from "@/redux/api/my-api";
import BasketPage from "./BasketPage";

const Basket = () => {
  const { data: session, status } = useSession();
  const { data: userData } = useGetUserQuery(undefined, {
    skip: status !== "authenticated",
  });

  const userId = userData?.id;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!userId) {
    return <div>Error: Invalid user ID</div>;
  }

  return <BasketPage userId={userId} />;
};

export default Basket;
