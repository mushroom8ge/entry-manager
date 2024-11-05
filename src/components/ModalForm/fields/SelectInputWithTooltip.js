import React, { useState } from "react";
import { Form, OverlayTrigger, Tooltip, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import InfoIcon from "@mui/icons-material/Info";
import "./style/SelectInputWithTooltip.css";

const SelectInputWithTooltip = ({
  name: field,
  label,
  value,
  onChange,
  error,
  tooltipText,
  options,
}) => {
  const [dropdownTitle, setDropdownTitle] = useState(value);

  const handleSelect = (selectedValue) => {
    const selectedOption = options.find(option => option.value === selectedValue);
    setDropdownTitle(selectedOption ? selectedOption.label : label);
    onChange(field, selectedValue);
  };

  return (
    <InputGroup hasValidation>
      <OverlayTrigger placement="top" overlay={<Tooltip>{tooltipText}</Tooltip>}>
        <InputGroup.Text>
          <InfoIcon />
        </InputGroup.Text>
      </OverlayTrigger>
      <DropdownButton
        as={InputGroup.Append}
        variant={error ? "danger" : "outline-secondary"}
        title={dropdownTitle}
        onSelect={handleSelect}
        id={`dropdown-${field}`}
      >
        {options.map((option) => (
          <Dropdown.Item key={option.key} eventKey={option.value}>
            {option.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {error && <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>{error}</Form.Control.Feedback>}
      </InputGroup>
  );
};

export default SelectInputWithTooltip;
