import  { useEffect, useState } from "react";
import Step1PersonalInfo from "./step1PersonalInfo";
import Tabs from "./Tabs";
import Step2AccountSetup from "./step2AccountSetup";
import Step3Preferences from "./step3Preferences";
import type { formData } from "../../types/formData";



export default function ModalContainer({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
    const steps = ["Personal Info", "Account Setup", "Preferences"];
  const [formData, setFormData] = useState<formData>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    theme: "Light",
    subscribe: false,
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);


  useEffect(() => {
    // Trigger the animation after mounting
    setTimeout(() => setIsVisible(true), 10);
  }, []);



  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  // Validation for each step
  const isStepValid = () => {
    if (currentStep === 1) {
      return (
        formData.fullName.trim() !== "" &&
        /\S+@\S+\.\S+/.test(formData.email)
      );
    }
    if (currentStep === 2) {
      return (
        formData.username.trim() !== "" &&
        formData.password.trim().length >= 6
      );
    }
    return true; 
  };

  return (
  <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50  p-3
        transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={` bg-white rounded-lg shadow-lg w-full md:w-[700px] p-6 relative 
          transform transition-transform duration-300 ease-out
          ${isVisible ? "scale-100" : "scale-95"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>
 
<div 
 className={` my-4`}
>
      {/* tabs  */}

       <Tabs steps={steps} currentStep={currentStep} />

        {/* Step Components */}
        <div className="mt-4">
          {currentStep === 1 && (
       <Step1PersonalInfo formData={formData} setFormData={setFormData} />

          )}
          {currentStep === 2 && (
           <Step2AccountSetup formData={formData} setFormData={setFormData} />
            
          )}
          {currentStep === 3 && (
               <Step3Preferences formData={formData} setFormData={setFormData} />
           
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-[40px]">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Back
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
</div>

      </div>
    </div>
  );
}
