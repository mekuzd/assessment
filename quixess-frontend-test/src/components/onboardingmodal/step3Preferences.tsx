import type { StepsProps } from "../../types/stepsProps";
import Input from "../input";


export default function Step3Preferences({ formData, setFormData }: StepsProps) {
  return (
    <div className="my-[40px] flex flex-col gap-[20px]">
      <select
        value={formData.theme}
        onChange={(e) =>
          setFormData({ ...formData, theme: e.target.value })
        }
        className="border rounded p-2 w-full"
      >
        <option>Light</option>
        <option>Dark</option>
      </select>

      <label className="flex items-center space-x-2">
        <Input
          type="checkbox"
          checked={formData.subscribe}
          onChange={(e) =>
            setFormData({ ...formData, subscribe: e.target.checked })
          }
          className="h-4 w-4"
        />
        <span>Subscribe to newsletter?</span>
      </label>
    </div>
  );
}
