import { useState } from "react";
import "./index.css";
import ModalContainer from "./components/onboardingmodal/modalContainer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-grey-500 text-grey-100 rounded-lg shadow-md hover:text-white hover:bg-blue-800 transition"
      >
        Open Onboarding Modal
      </button>

      {isModalOpen && (
        <ModalContainer onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
