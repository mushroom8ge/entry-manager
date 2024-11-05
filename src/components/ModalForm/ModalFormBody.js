import React, { useEffect } from "react";
import FormFields from "./fields/FormFields";
import ErrorDisplay from "./fields/ErrorDisplay";
import { useFormValidation } from "../../hooks/useFormValidation";
import SubmitButton from "../common/SubmitButton";
import Entry from "../../models/Entry";

const ModalFormBody = ({
  formData,
  setFormData,
  onSubmit,
  handleClose,
  editData,
  fieldsConfig,
}) => {
  const { errors, isFormValid, validateField, resetErrors } = useFormValidation(
    formData,
    fieldsConfig,
    editData
  );

  const handleChange = (name, value) => {
    validateField(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fieldsConfig.forEach(({ name }) => {
      validateField(name, formData[name]);
    });
  }, [formData, validateField, fieldsConfig]);

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(formData);
      resetFormData();
    }
  };

  const resetFormData = () => {
    setFormData(new Entry());
    resetErrors();
  };

  const handleModalClose = () => {
    resetFormData();
    handleClose();
  };

  return (
    <>
      <FormFields
        fieldsConfig={fieldsConfig}
        formData={formData}
        handleChange={handleChange}
        errors={errors}
      />
      <ErrorDisplay errors={errors} />
      <div style={{ textAlign: "right", marginTop: "16px" }}>
        <SubmitButton onClick={handleSubmit} isFormValid={isFormValid} />
      </div>
      <button onClick={handleModalClose} style={{ display: "none" }}>
        Close
      </button>
    </>
  );
};

export default ModalFormBody;
