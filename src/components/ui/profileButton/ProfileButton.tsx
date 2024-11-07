"use client";
import scss from "./ProfileButton.module.scss";
import { useGetUserQuery } from "@/redux/api/my-api";
import { useHeaderStore } from "@/stores/useHeaderStore";
import Image from "next/image";

const ProfileButton = () => {
  const { data: session } = useGetUserQuery();
  const { isOpenProfileMenu, setIsOpenProfileMenu } = useHeaderStore();

  return (
    <div
      className={scss.ProfileButton}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpenProfileMenu(!isOpenProfileMenu);
      }}
    >
      <div className={scss.content}>
        <Image
          width={50}
          height={50}
          src={session?.photo || "/default-image.png"}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default ProfileButton;
