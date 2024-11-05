import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import InfoIcon from "@mui/icons-material/Info";
import "./style/CheckboxWithTooltip.css";

const CheckboxWithTooltip = ({
  name: field,
  label,
  value,
  onChange,
  tooltipText,
}) => (
  <InputGroup>
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip>{tooltipText}</Tooltip>}
    >
      <InputGroup.Text className="icon-container-checkbox">
        <InfoIcon />
        <span>{label}</span>
        <Form.Check
          id={field}
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(field, e.target.checked)}
        />
      </InputGroup.Text>
    </OverlayTrigger>
  </InputGroup>
);

export default CheckboxWithTooltip;
