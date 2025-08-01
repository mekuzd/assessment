import { useForm } from "react-hook-form";
import type { StepsProps } from "../../types/stepsProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { preferencesSchema } from "../../validation/validationSchema";
import Input from "../input";

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
        className="border rounded p-2 w-full outline-none focus:border-blue-800 "
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
      {errors.theme && (
        <p className="text-red-500 mt-1 text-sm">{errors.theme.message}</p>
      )}

     
      <label className="flex items-center space-x-2">
        <Input
          type="checkbox"
          name="subscribe"
          register={register}
          errors={errors}
          className="h-4 w-4"
        />
        <span className="mb-1">Subscribe to newsletter?</span>
      </label>
     
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
