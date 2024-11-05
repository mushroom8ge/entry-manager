export const fieldsConfig = [
  {
    name: "id",
    label: "ID",
    rules: ["positiveInteger", "uniqueId"],
    type: "text",
    tooltipText:
      "ID must be a positive integer and unique. Note: If not given, next integer of existing entries is used.",
  },
  {
    name: "type",
    label: "Type",
    type: "select",
    tooltipText: "Select the type",
    options:[
      { key: 1, value: "Capture Alphanumeric", label: "Capture Alphanumeric" },
      { key: 2, value: "Capture Float", label: "Capture Float" },
      { key: 3, value: "Capture Date", label: "Capture Date" },
      { key: 4, value: "Prompt Only", label: "Prompt Only" },
      { key: 5, value: "Boolean", label: "Boolean" },
    ],
  },
  {
    name: "prompt",
    label: "Prompt",
    rules: ["required"],
    type: "text",
    tooltipText: "Enter the prompt",
    isTextArea: true,
  },
  {
    name: "stage",
    label: "Stage",
    rules: ["required"],
    type: "text",
    tooltipText: "Enter the stage",
  },
  {
    name: "enabled",
    label: "Enabled",
    type: "checkbox",
    tooltipText: "Check if enabled",
  },
];
