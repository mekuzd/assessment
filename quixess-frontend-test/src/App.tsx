
import "./index.css";
import ModalContainer from "./components/onboardingmodal/modalContainer";
import { useDispatch, useSelector } from "react-redux";
import {  openModal } from "../store/onBoardingSlice";
import type { RootState } from "../store";

function App() {

  const dispatch = useDispatch();

const { isModalOpen } = useSelector((state:RootState) => state.onboarding);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
       onClick={() => dispatch(openModal())}
        className="px-6 py-3 bg-grey-500 text-grey-100 rounded-lg shadow-md hover:text-white hover:bg-blue-800 transition"
      >
        Open Onboarding Modal
      </button>

      {isModalOpen && (
        <ModalContainer  />
      )}
    </div>
  );
}

export default App;
