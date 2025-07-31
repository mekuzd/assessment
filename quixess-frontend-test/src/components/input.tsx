import React from "react";

type InputProps = {
  type: string; 
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
className?: string; 
};

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded p-2 w-full text-sm outline-none focus:border-blue-500 ${className}`}
    />
  );
}
