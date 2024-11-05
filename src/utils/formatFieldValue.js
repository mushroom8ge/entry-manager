export const formatFieldValue = (name, value) => {
  if (name === "enabled") {
    return value ? "Yes" : "No";
  }
  return value;
};
