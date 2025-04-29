import React from "react";

const Input = ({ label, type, name, onClick, onChange, placeholder }) => {
  return (
    <div className="flex flex-col mt-5">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-stone-800 p-2 rounded-xl mt-2 placeholder:text-stone-600 placeholder:p-2 outline-none"
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
