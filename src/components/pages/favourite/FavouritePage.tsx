"use client";
import { useSession } from "next-auth/react";
import FavouriteList from "./FavouriteList";
import { useGetUserQuery } from "@/redux/api/my-api";

const FavouritePage = () => {
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
  return <FavouriteList userId={userId} />;
};

export default FavouritePage;
