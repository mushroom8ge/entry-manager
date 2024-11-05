import { formatFieldValue } from "../formatFieldValue";

describe("formatFieldValue", () => {
  it("should format enabled field correctly", () => {
    expect(formatFieldValue("enabled", true)).toBe("Yes");
    expect(formatFieldValue("enabled", false)).toBe("No");
  });

  it("should return value as is for other fields", () => {
    expect(formatFieldValue("id", "1")).toBe("1");
  });
});
