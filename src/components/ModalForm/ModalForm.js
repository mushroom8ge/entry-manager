import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalFormBody from "./ModalFormBody";
import Entry from "../../models/Entry";

const ModalForm = ({ show, handleClose, editData, onSubmit, fieldsConfig }) => {
  const [formData, setFormData] = useState(new Entry());

  useEffect(() => {
    if (editData) {
      setFormData(new Entry(editData));
    } else {
      setFormData(new Entry());
    }
  }, [editData]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editData ? "Edit Entry" : "Add New Entry"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalFormBody
          formData={formData}
          setFormData={setFormData}
          onSubmit={() => onSubmit(formData)}
          handleClose={handleClose}
          editData={editData}
          fieldsConfig={fieldsConfig}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
