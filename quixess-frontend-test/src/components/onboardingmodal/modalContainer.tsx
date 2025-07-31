import React, { useState } from "react";


export default function ModalContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    theme: "Light",
    subscribe: false,
  });

  const steps = ["Personal Info", "Account Setup", "Preferences"];

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
    return true; // Step 3 no required validation
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
   {/* tabs  */}


        {/* Step Components */}
        <div className="mt-4">
          {currentStep === 1 && (
            'one'

          )}
          {currentStep === 2 && (
            'two'
            
          )}
          {currentStep === 3 && (
            'three'
           
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
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
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
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
  );
}
