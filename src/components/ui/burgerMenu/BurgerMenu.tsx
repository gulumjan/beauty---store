import React from "react";
import scss from "./BurgerMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useGetUserQuery } from "@/redux/api/my-api";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { signIn, signOut } from "next-auth/react";

const BurgerMenu = () => {
  const pathname = usePathname();
  const { data: session } = useGetUserQuery();
  const { isOpenBurgerMenu, setIsOpenBurgerMenu, links } = useHeaderStore();
  const router = useRouter();

  return (
    <>
      <div
        className={
          isOpenBurgerMenu
            ? `${scss.BurgerMenu} ${scss.active}`
            : `${scss.BurgerMenu}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={scss.content}>
          {session ? (
            <div className={scss.user_profile}>
              <Image
                width={50}
                height={50}
                src={session.photo! || "/default-image.png"}
                alt="avatar"
              />
              <div className={scss.user_data}>
                <p className={scss.user_name}>{session.firstName}</p>
                <p className={scss.user_email}>{session.lastName}</p>
              </div>
            </div>
          ) : (
            <>
              <div className={scss.auth_login_buttons}>
                <button
                  className={scss.sign_in_button}
                  onClick={() => signIn()}
                >
                  Login
                </button>
                <button onClick={() => router.push("/")}>Home </button>
                <button onClick={() => router.push("/about")}>About </button>
              </div>
            </>
          )}
          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    className={
                      pathname === item.href
                        ? `${scss.link} ${scss.active}`
                        : `${scss.link}`
                    }
                    href={item.href}
                    onClick={() => setIsOpenBurgerMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {session && (
            <div className={scss.auth_logout_buttons}>
              <button className={scss.logout_button} onClick={() => signOut()}>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default BurgerMenu;
