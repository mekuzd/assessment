
type InputProps = {
  type: string; 
  placeholder?: string;
  value?: string;
className?: string; 
checked?: boolean;
register?: any; 
  errors?: any; 
  name:string
};

export default function Input({
  type = "text",
  placeholder = "",
  className = "",
  checked,
  register,
  errors,
  name
}: InputProps) {
  return (
 <div>
 
    <input
      type={type}
      placeholder={placeholder}
      className={`border rounded p-2 w-full text-sm outline-none focus:border-blue-800  ${className}`}
      checked={checked}
     {...register(name)}   
    />
     {errors[name] && <p className="text-red-500 mt-1 text-sm">{errors[name].message}</p>}</div>
  );
}
