import { useForm } from "react-hook-form";
import type { StepsProps } from "../../types/stepsProps";
import Input from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountSetupSchema } from "../../validation/validationSchema";

export default function Step2AccountSetup({ formData, setFormData ,onValidNext, onBack}: StepsProps) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(accountSetupSchema),
    defaultValues: {
      username: formData.username,
      password: formData.password,
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
           placeholder="Username"
           register={register}
           errors={errors}
           name="username"
         />

         <Input
           type="password"
           placeholder="Password (min 6 chars)"
           register={register}
           errors={errors}
           name="password"
         />

        <div className="flex justify-between">
        <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-300 rounded">
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Next
        </button>
      </div>
       </form>
  );
}
    

