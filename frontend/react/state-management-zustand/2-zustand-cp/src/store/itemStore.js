import create from "zustand";
// TODO: answer here
import { persist } from "zustand/middleware";

const useItemStore =
  // TODO: answer here
  create(
    persist(
      (set) => ({
        items: [],
        addItem: (item) => {
          set((state) => ({
            items: [...state.items, item],
          }));
        },
        removeItem: (itemId) => {
          set((state) => ({
            items: state.items.filter((i) => i.id !== itemId),
          }));
        },
      }),
      { name: "items" }
    )
  );

export default useItemStore;
