import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import InfoIcon from "@mui/icons-material/Info";

const TextInputWithTooltip = ({
  name: field,
  label,
  value,
  onChange,
  error,
  tooltipText,
  isTextArea,
}) => (
  <InputGroup hasValidation>
    <OverlayTrigger placement="top" overlay={<Tooltip>{tooltipText}</Tooltip>}>
      <InputGroup.Text>
        <InfoIcon />
      </InputGroup.Text>
    </OverlayTrigger>
    <Form.Control
      id={field}
      type="text"
      placeholder={label}
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      isInvalid={!!error}
      as={isTextArea && "textarea"}
    />
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </InputGroup>
);

export default TextInputWithTooltip;
