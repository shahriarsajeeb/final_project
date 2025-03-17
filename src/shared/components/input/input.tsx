import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
}

const Input = ({ label, placeholder, type = "text" }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-white text-lg font-DmSans font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[55px] font-DmSans text-lg gradient-input text-white px-4 py-3 rounded-md"
      />
    </div>
  );
};

export default Input;
