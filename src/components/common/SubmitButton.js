import React from "react";
import Button from "./Button";

const SubmitButton = ({ onClick, isFormValid }) => {
  return (
    <Button
      onClick={onClick}
      text="Submit"
      isDisabled={!isFormValid}
      variant="primary"
    />
  );
};

export default SubmitButton;
