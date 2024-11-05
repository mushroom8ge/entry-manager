import React from "react";
import { Button } from "react-bootstrap";

const EditButton = ({ onEdit }) => (
  <Button variant="warning" size="sm" onClick={onEdit}>
    Edit
  </Button>
);

const DeleteButton = ({ onDelete }) => (
  <Button
    variant="danger"
    size="sm"
    onClick={onDelete}
    style={{ marginLeft: "10px" }}
  >
    Delete
  </Button>
);

const TableActionButtons = ({ onEdit, onDelete }) => (
  <>
    <EditButton onEdit={onEdit} />
    <DeleteButton onDelete={onDelete} />
  </>
);

export default TableActionButtons;
