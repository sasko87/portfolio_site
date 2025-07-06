import React from "react";

const Input = ({
  label,
  type,
  name,
  onClick,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div className="flex flex-col mt-5">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-stone-800 p-2 rounded-xl mt-2 placeholder:text-stone-600 placeholder:p-2 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:placeholder-transparent"
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
