import TextInputWithTooltip from "./TextInputWithTooltip";
import SelectInputWithTooltip from "./SelectInputWithTooltip";
import CheckboxWithTooltip from "./CheckboxWithTooltip";

const createFormField = (props) => {
  switch (props.type) {
    case "text":
      return <TextInputWithTooltip key={props.name} {...props} />;
    case "select":
      return <SelectInputWithTooltip key={props.name} {...props} />;
    case "checkbox":
      return <CheckboxWithTooltip key={props.name} {...props} />;
    default:
      return null;
  }
};

export default createFormField;
