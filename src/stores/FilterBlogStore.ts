import { TechFieldsCategories } from "@/types/types";
import { create } from "zustand";

type State = {
  categories: TechFieldsCategories[];
};
type Actions = {
  addCategory: (category: TechFieldsCategories) => void;
  removeCategory: (category: TechFieldsCategories) => void;
  restore: () => void;
};

export const useFilterCategoriesStore = create<State & Actions>((set) => ({
  categories: [],
  addCategory: (category: TechFieldsCategories) =>
    set((state) => ({ categories: [...state.categories, category] })),
  removeCategory: (category: TechFieldsCategories) =>
    set((state) => ({
      categories: state.categories.filter((item) => item !== category),
    })),
  restore: () => set(() => ({ categories: [] })),
}));
