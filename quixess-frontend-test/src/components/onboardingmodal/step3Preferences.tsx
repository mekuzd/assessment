import { useForm } from "react-hook-form";
import type { StepsProps } from "../../types/stepsProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { preferencesSchema } from "../../validation/validationSchema";

export default function Step3Preferences({
  formData,
  setFormData,
  onBack,
}: StepsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(preferencesSchema),
    defaultValues: {
      theme: formData.theme || "Light",
      subscribe: formData.subscribe,
    },
  });

  const onSubmit = (data: any) => {
    setFormData(data);
    
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-[40px] flex flex-col gap-[20px]"
    >
      
      <select
        {...register("theme")}
        className="border rounded p-2 w-full"
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
      {errors.theme && (
        <p className="text-red-500 mt-1 text-sm">{errors.theme.message}</p>
      )}

      {/* Newsletter Checkbox */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          {...register("subscribe")}
          className="h-4 w-4"
        />
        <span>Subscribe to newsletter?</span>
      </label>
      {errors.subscribe && (
        <p className="text-red-500 mt-1 text-sm">{errors.subscribe.message}</p>
      )}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
