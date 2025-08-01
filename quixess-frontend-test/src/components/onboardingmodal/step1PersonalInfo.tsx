
import Input from "../input";
import type { StepsProps } from "../../types/stepsProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInfoSchema } from "../../validation/validationSchema";
import { useForm } from "react-hook-form";




export default function Step1PersonalInfo({ formData, setFormData , onValidNext}: StepsProps) {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
    },
  });

  const onSubmit = (data:any) => {
    setFormData(data);
    onValidNext!();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-[40px] flex flex-col gap-[20px]">
      <Input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}  
        register={register}
        errors={errors}
        name="fullName"
      />

      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}      
        register={register}
        errors={errors}
        name="email"
      />

      
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Next
      </button>
    </form>
  );
}
