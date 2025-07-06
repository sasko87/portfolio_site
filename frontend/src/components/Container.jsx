import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`w-6/8 min-h-fit h-screen flex flex-col  ${className} max-lg:w-full ml-15 mr-15 max-lg:mr-5 max-lg:ml-5`}
    >
      {children}
    </div>
  );
};

export default Container;
