
import Input from "../input";
import type { StepsProps } from "../../types/stepsProps";




export default function Step1PersonalInfo({ formData, setFormData }: StepsProps) {
  return (
    <div className="my-[40px] flex flex-col gap-[20px]">
      <Input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) =>
          setFormData({ ...formData, fullName: e.target.value })
        }
  
      />
      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      
      />
    </div>
  );
}
