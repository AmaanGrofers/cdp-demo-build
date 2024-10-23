import { create } from "zustand";

const attributeStore = (set, get) => ({
  creatingAttribute: false,

  currentStep: 0,

  //* if creating > reset the currentStep
  setCreation: () => {
    set((state) => ({
      ...state,
      creatingAttribute: !get().creatingAttribute,
      currentStep: 0,
    }));
  },

  setCurrentStep: (step) => {
    set((state) => ({
      ...state,
      currentStep: step,
    }));
  },
});

const useAttributeStore = create(attributeStore);

export default useAttributeStore;
