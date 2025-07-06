import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="self-center text-4xl">
      <h3 className="text-neutral-200 underline underline-offset-10 decoration-3 mb-10 mt-15">
        {children}
      </h3>
    </div>
  );
};

export default SectionTitle;
