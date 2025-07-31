import type { formData } from "./formData";


export type StepsProps = {
    formData:formData
    setFormData: React.Dispatch<React.SetStateAction<formData>>;
}