import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-5/6 min-h-fit h-screen flex flex-col pb-7 ${className} max-lg:w-full`}
    >
      {children}
    </div>
  );
};

export default Container;
