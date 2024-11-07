"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import {
  useGetBasketsQuery,
  useGetFavouritesQuery,
  useGetUserQuery,
} from "@/redux/api/my-api";
import BurgerButton from "@/components/ui/burgerButton/BurgerButton";
import BurgerMenu from "@/components/ui/burgerMenu/BurgerMenu";
import ProfileButton from "@/components/ui/profileButton/ProfileButton";
import ProfileMenu from "@/components/ui/profileMenu/ProfileMenu";
import Image from "next/image";
import logoImg from "@/images/Снимок экрана 2024-11-06 140447.png";
import { useHeaderStore } from "@/stores/useHeaderStore";

const Header: FC = () => {
  const router = useRouter();
  const { data } = useGetUserQuery();
  const { data: session } = useSession();
  const userId = data?.id;
  const { data: favourite } = useGetFavouritesQuery(userId!);
  const { data: basket } = useGetBasketsQuery(userId!);
  const favouriteCount = favourite?.length ?? 0;
  const basketCount = basket?.length ?? 0;

  const handleSignIn = async () => {
    if (session?.user) {
      try {
        await axios.post("http://localhost:3000/api/v1/sign-in");
      } catch (error) {
        console.error("Error making POST request:", error);
      }
    }
  };

  useEffect(() => {
    handleSignIn();
  }, [session]);

  const [searchQuery, setSearchQuery] = useState("");
  const [hasUserInput, setHasUserInput] = useState(false);

  useEffect(() => {
    if (hasUserInput) {
      if (searchQuery) {
        router.push(`/search/${searchQuery}`);
      } else {
        router.push(`/search`);
      }
    }
  }, [searchQuery, hasUserInput]);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Zustand store for modal control
  const { isOpenModal, setIsOpenModal } = useHeaderStore();

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.blackHeader}>
            <p>
              Summer Sale For All Swim Suits And Free Express - OFF 50%!
              <span>Shop Now</span>
            </p>
            <select name="language" id="">
              <option value="en">English</option>
              <option value="ru">Russian</option>
            </select>
          </div>
          <div className={scss.mainHeader}>
            <Image width={50} height={50} src={logoImg} alt="" />
            <nav>
              <a href="/">Home</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
              <a href="#collection">Collection</a>
            </nav>
            <div className={scss.logos}>
              <div className={scss.searchContainer}>
                <input
                  onFocus={() => router.push(`/search`)}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setHasUserInput(true);
                  }}
                  value={searchQuery}
                  placeholder="What are you looking for?"
                  type="text"
                />
                <IoSearchOutline className={scss.searchIcon} />
              </div>

              {session ? (
                <>
                  <div className={scss.iconContainer}>
                    <FaRegHeart
                      onClick={() => router.push(`/favourite`)}
                      className={scss.icon}
                    />
                    {favouriteCount > 0 && (
                      <span className={scss.badge}>{favouriteCount}</span>
                    )}
                  </div>
                  <div className={scss.iconContainer}>
                    <IoCartOutline
                      onClick={() => router.push(`/basket`)}
                      style={{ width: "30px", height: "30px" }}
                      className={scss.icon}
                    />
                    {basketCount > 0 && (
                      <span className={scss.badge}>{basketCount}</span>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className={scss.auth}>
                {isMobile ? (
                  <>
                    <BurgerButton />
                    <BurgerMenu />
                  </>
                ) : (
                  <>
                    {session ? (
                      <>
                        <ProfileButton />
                        <ProfileMenu />
                      </>
                    ) : (
                      <button onClick={() => signIn()}>Login</button>
                    )}
                  </>
                )}
              </div>

              <div
                className={scss.moreIcon}
                onClick={() => setIsOpenModal(!isOpenModal)}
              >
                <IoCartOutline />
              </div>

              {isOpenModal && (
                <div className={scss.modal}>
                  <FaRegHeart
                    onClick={() => router.push(`/favourite`)}
                    className={scss.icon}
                  />
                  <IoCartOutline
                    onClick={() => router.push(`/basket`)}
                    className={scss.icon}
                  />
                  <IoSearchOutline
                    onClick={() => router.push(`/search`)}
                    className={scss.icon}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
