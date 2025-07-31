import Input from "../input";
import type { StepsProps } from "./step1PersonalInfo";


export default function Step2AccountSetup({ formData, setFormData }:StepsProps) {
  return (
    <div className="my-[40px] flex flex-col gap-[20px]">
      <Input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
       
      />
    <Input
  type="password"
  placeholder="Password (min 6 chars)"
  value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
/>

    </div>
  );
}
