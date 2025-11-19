import React from "react";

const GradientButton = ({text, className}) => {
  return (
    <>
      <a
        href=""
        className={`btn uppercase font-heading border-2 border-transparent 
        min-w-[205px] px-12 py-6 lg:py-3 rounded-full ${className}`}>
        {text}
      </a>
    </>
  );
};

export default GradientButton;
