import type { formData } from "../../store/onBoardingSlice";



export type StepsProps = {
    formData:formData;
    onValidNext?: () => void;
    setFormData: React.Dispatch<React.SetStateAction<formData>>;
    onBack?: () => void;
}