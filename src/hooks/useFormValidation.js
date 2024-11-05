import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectIsDuplicateId } from "../features/entries/selectors";
import { validate } from "../utils/ValidationStrategy";

export const useFormValidation = (formData, fieldsConfig, editData) => {
  const [errors, setErrors] = useState({});

  const isDuplicateId = useSelector(selectIsDuplicateId(formData.id));

  const validateField = useCallback(
    (name, value) => {
      const fieldConfig = fieldsConfig.find((field) => field.name === name);
      const rules = fieldConfig.rules || [];

      const context = { isDuplicateId, editData };
      const error = validate(name, value, rules, context);

      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    },
    [isDuplicateId, editData, fieldsConfig]
  );

  const isFormValid = Object.values(errors).every((error) => !error);

  const resetErrors = () => {
    setErrors({});
  };

  return {
    errors,
    isFormValid,
    validateField,
    resetErrors,
  };
};
