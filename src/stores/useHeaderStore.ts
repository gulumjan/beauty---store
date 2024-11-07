import { create } from "zustand";

interface HeaderStore {
  links: {
    name: string;
    href: string;
  }[];

  isOpenProfileMenu: boolean;
  setIsOpenProfileMenu: (isOpenProfileMenu: boolean) => void;

  isOpenBurgerMenu: boolean;
  setIsOpenBurgerMenu: (isOpenBurgerMenu: boolean) => void;

  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  links: [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
  ],

  isOpenProfileMenu: false,
  setIsOpenProfileMenu: (isOpenProfileMenu) =>
    set(() => ({ isOpenProfileMenu })),

  isOpenBurgerMenu: false,
  setIsOpenBurgerMenu: (isOpenBurgerMenu) => set(() => ({ isOpenBurgerMenu })),

  isOpenModal: false,
  setIsOpenModal: (isOpenModal) => set(() => ({ isOpenModal })),
}));
