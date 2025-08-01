import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, nextStep, prevStep, updateForm } from "../../../store/onBoardingSlice";
import Step1PersonalInfo from "./step1PersonalInfo";
import Step2AccountSetup from "./step2AccountSetup";
import Step3Preferences from "./step3Preferences";
import type { RootState } from "../../../store";
import Tabs from "./Tabs";

export default function ModalContainer() {
  const dispatch = useDispatch();
  const { isModalOpen, currentStep, formData } = useSelector(
    (state: RootState) => state.onboarding
  );
const stepLabels = ["Personal Info", "Account Setup", "Preferences"];
const handleNext = () => {
  dispatch(nextStep());
};

  const steps = [
    <Step1PersonalInfo
      formData={formData}
      setFormData={(data) => dispatch(updateForm(data))}
      onValidNext={handleNext}      
    />,
    <Step2AccountSetup
      formData={formData}
      setFormData={(data) => dispatch(updateForm(data))}
      onValidNext={handleNext}
      onBack={() => dispatch(prevStep())}
    />,
    <Step3Preferences
      formData={formData}
 setFormData={(data) => {
    dispatch(updateForm(data));
    alert(JSON.stringify({ ...formData, ...data }, null, 2));
    dispatch(closeModal());
  }}
      

  onBack={() => dispatch(prevStep())}
/>


  ];

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-2"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white p-2 md:p-6 rounded-lg shadow-lg w-full max-w-lg"
          >
            {/* Close Button inside modal */}
            <button
              onClick={() => dispatch(closeModal())}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600  transition"
            >
              ✕
            </button>

   <Tabs steps={stepLabels} currentStep={currentStep} />


            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {steps[currentStep - 1]}
              </motion.div>
            </AnimatePresence>

          
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
