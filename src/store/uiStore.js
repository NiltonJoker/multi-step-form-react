import { create } from "zustand";
import stepsForm from "../utils/steps";

export const useUIStore = create((set) => ({
  activeStep: 1,
  stepInfo: stepsForm[0],
  planSelect: null,
  typePlan: "monthly",
  addonsSelected: [],
  finishForm: false,

  goToNextStep: () => {
    return set((state) => {
      if (state.activeStep === stepsForm.length) return state;

      const stepInfo = stepsForm.find(
        (step) => step.id === state.activeStep + 1
      );
      const validateStep = stepsForm.some(
        (step) => step.id === state.activeStep + 1
      );

      return {
        ...state,
        activeStep: validateStep ? state.activeStep + 1 : 0,
        stepInfo: stepInfo ?? state.stepInfo,
      };
    });
  },

  goToBackStep: () => {
    return set((state) => {
      if (state.activeStep === 1) return state;

      const stepInfo = stepsForm.find(
        (step) => step.id === state.activeStep - 1
      );
      const validateStep = stepsForm.some(
        (step) => step.id === state.activeStep - 1
      );

      return {
        ...state,
        activeStep: validateStep ? state.activeStep - 1 : 0,
        stepInfo: stepInfo ?? state.stepInfo,
      };
    });
  },

  setSelectedPlan: (planId) => {
    return set((state) => ({
      ...state,
      planSelect: planId,
    }));
  },

  setTypePlan: (typePlan) => {
    return set((state) => ({
      ...state,
      typePlan: typePlan,
    }));
  },

  setSelectedAddon: (addon) => {
    return set((state) => {
      return {
        ...state,
        addonsSelected: [...state.addonsSelected, addon],
      };
    });
  },

  removeSelectedAddon: (addon) => {
    return set((state) => {
      const newAddonsSelected = state.addonsSelected.filter(
        (add) => add.id !== addon.id
      );

      return {
        ...state,
        addonsSelected: newAddonsSelected,
      };
    });
  },

  setFinishForm: () => {
    return set((state) => ({
      ...state,
      finishForm: true,
    }));
  },

  setStepToChangePlan: () => {
    return set((state) => ({
      ...state,
      activeStep: 2,
    }));
  },
}));
