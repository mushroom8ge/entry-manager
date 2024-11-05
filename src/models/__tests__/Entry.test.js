import Entry from "../Entry";

describe("Entry", () => {
  it("should create an Entry instance", () => {
    const entry = new Entry({
      id: "1",
      type: "Type1",
      prompt: "Prompt1",
      stage: "Stage1",
      enabled: true,
    });
    expect(entry.id).toBe("1");
    expect(entry.type).toBe("Type1");
  });
});
