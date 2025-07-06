import React from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ children, onClose }) => {
  return (
    <div className="w-screen h-screen bg-stone-600/80 fixed top-0 left-0 right-0 bottom-0 z-100 flex items-center justify-center backdrop-blur-sm transition duration-500 animate-fadeShow">
      <MdClose
        onClick={onClose}
        className="text-neutral-100 absolute top-5 right-15 text-3xl cursor-pointer"
      />

      <div className="bg-stone-950 w-1/3 h-2/4 rounded-xl flex flex-col items-center justify-center text-xl leading-10 max-lg:w-2/4 max-md:w-3/4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
