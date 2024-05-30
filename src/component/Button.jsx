import React from "react";

const Button = ({ handleButtonClick }) => {
  return (
    <div>
      <button
        className="rounded-lg text-white bg-blue-600 py-2 px-4 my-3"
        onMouseEnter={handleButtonClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;
