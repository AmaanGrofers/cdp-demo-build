import { create } from "zustand";

const userStore = (set, get) => ({
  currentNav: "",

  setCurrentNav: (nav) => {
    set((state) => ({
      ...state,
      currentNav: nav,
    }));
  },
});

const useUserStore = create(userStore);

export default useUserStore;
