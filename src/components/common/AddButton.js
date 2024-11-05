import React from "react";
import Button from "./Button";

const AddButton = ({ onClick }) => {
  return <Button onClick={onClick} text="Add New Entry" variant="primary" />;
};

export default AddButton;
