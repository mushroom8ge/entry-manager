const strategies = {
  required: (value) => (value ? null : "This field is required."),

  positiveInteger: (value, _, editData) => {
    if (editData && !value) {
      return "ID is required when editing an entry.";
    }

    if (!value) return null;

    const isInteger = Number.isInteger(Number(value));
    const isPositive = Number(value) > 0;
    const hasNoDot = !value.includes(".");

    if (!isInteger || !isPositive || !hasNoDot) {
      return "ID must be a positive integer without a decimal point.";
    }

    return null;
  },

  uniqueId: (value, isDuplicateId, editData) =>
    isDuplicateId && (!editData || Number(editData.id) !== Number(value))
      ? "The typed ID already exists."
      : null,
};

export const validate = (name, value, rules, context = {}) => {
  for (const rule of rules) {
    const error = strategies[rule](
      value,
      context.isDuplicateId,
      context.editData,
      name
    );
    if (error) return `${name.toUpperCase()}: ${error}`;
  }
  return null;
};

export default validate;
