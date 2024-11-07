"use client";
import { useHeaderStore } from "@/stores/useHeaderStore";
import scss from "./ProfileMenu.module.scss";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const ProfileMenu = () => {
  const { isOpenProfileMenu } = useHeaderStore();
  const title = ["Profile"];
  const router = useRouter();
  return (
    <div
      className={
        isOpenProfileMenu
          ? `${scss.ProfileMenu} ${scss.active}`
          : `${scss.ProfileMenu}`
      }
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={scss.content}>
        {title.map((el, idx) => (
          <div key={idx} className={scss.text}>
            {el === "Profile" ? (
              <p onClick={() => router.push("/")}>Profile</p>
            ) : (
              <p>{el}</p>
            )}
          </div>
        ))}
        <hr />
        <div className={scss.logout}>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
