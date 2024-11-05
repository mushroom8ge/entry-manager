import React from "react";

const ErrorDisplay = ({ errors }) => {
  if (!errors || Object.keys(errors).length === 0) {
    return null;
  }

  return (
    <div style={{ color: "red" }}>
      <ul>
        {Object.entries(errors)
          .filter(([field, error]) => error)
          .map(([field, error], index) => (
            <li key={index}>{error}</li>
          ))}
      </ul>
    </div>
  );
};

export default ErrorDisplay;
