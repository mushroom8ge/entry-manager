import React from "react";
import createFormField from "./FieldFactory";

const FormFields = ({ fieldsConfig, formData, handleChange, errors }) => (
  <>
    {fieldsConfig.map(({ name, label, type, tooltipText, options, isTextArea }) =>
      createFormField({
        name,
        label,
        type,
        value: formData[name] || "",
        onChange: handleChange,
        error: errors[name],
        tooltipText,
        options,
        isTextArea,
      })
    )}
  </>
);

export default FormFields;
