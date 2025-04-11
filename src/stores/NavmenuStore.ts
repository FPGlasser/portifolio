import { NavMenuId } from "@/types/types";
import { create } from "zustand";

type CurrentMenu = NavMenuId;

type State = {
  currentActiveMenu: CurrentMenu;
};

type Action = {
  setActiveMenu: (current: CurrentMenu) => void;
};

type NavMenuStore = State & Action;

export const useNavMenuStore = create<NavMenuStore>((set) => ({
  currentActiveMenu: "HOME",
  setActiveMenu: (current) => set(() => ({ currentActiveMenu: current })),
}));
