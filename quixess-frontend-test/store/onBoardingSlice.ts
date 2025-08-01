import { createSlice } from "@reduxjs/toolkit";


export type formData = {
    fullName: string,
    email: string
    username: string,
    password: string,
    theme: 'Light' | 'Dark',
    subscribe: boolean,
  }

export type initialState ={
    isModalOpen:boolean
    currentStep:number
    formData:formData
}

const initialState :initialState = {
  isModalOpen: false,
  currentStep: 1,
  formData: {
    fullName: "",
    email: "",
    username: "",
    password: "",
    theme: "Light",
    subscribe: false,
  },
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    openModal: (state) => { state.isModalOpen = true; },
    closeModal: (state) => { state.isModalOpen = false; state.currentStep = 1; },
    nextStep: (state) => { if (state.currentStep < 3) state.currentStep += 1; },
    prevStep: (state) => { if (state.currentStep > 1) state.currentStep -= 1; },
    updateForm: (state, action) => { state.formData = { ...state.formData, ...action.payload }; },
  },
});

export const { openModal, closeModal, nextStep, prevStep, updateForm } = onboardingSlice.actions;
export default onboardingSlice.reducer;
