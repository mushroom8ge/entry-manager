import { validate } from "../ValidationStrategy";

describe("ValidationStrategy", () => {
  it("should validate required fields", () => {
    const rules = ["required"];
    expect(validate("name", "", rules)).toBe("NAME: This field is required.");
  });

  it("should validate positive integers", () => {
    const rules = ["positiveInteger"];
    expect(validate("id", "abc", rules)).toBe(
      "ID: ID must be a positive integer without a decimal point."
    );
    expect(validate("id", "123", rules)).toBeNull();
  });

  it("should validate unique IDs", () => {
    const rules = ["uniqueId"];
    const context = { isDuplicateId: true, editData: { id: "1" } };
    expect(validate("id", "1", rules, context)).toBeNull();
    expect(validate("id", "2", rules, context)).toBe(
      "ID: The typed ID already exists."
    );
  });
});
