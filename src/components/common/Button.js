import React from "react";

const Button = ({
  onClick,
  text,
  isDisabled = false,
  style,
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`btn btn-${isDisabled ? "secondary" : variant}`}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
