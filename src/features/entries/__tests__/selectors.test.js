import { selectFilteredEntries, selectIsDuplicateId } from "../selectors";

describe("selectors", () => {
  const state = {
    entries: {
      entries: [
        {
          id: "1",
          type: "Type1",
          prompt: "Prompt1",
          stage: "Stage1",
          enabled: true,
        },
        {
          id: "2",
          type: "Type2",
          prompt: "Prompt2",
          stage: "Stage2",
          enabled: false,
        },
      ],
    },
  };

  it("selectFilteredEntries should filter entries based on searchTerm", () => {
    const searchTerm = "Prompt1";
    const fieldsConfig = [
      { name: "id", label: "ID" },
      { name: "type", label: "Type" },
      { name: "prompt", label: "Prompt" },
    ];
    const filteredEntries = selectFilteredEntries(
      searchTerm,
      fieldsConfig
    )(state);
    expect(filteredEntries).toEqual([state.entries.entries[0]]);
  });

  it("selectIsDuplicateId should return true if ID is duplicate", () => {
    expect(selectIsDuplicateId("1", null)(state)).toBe(true);
    expect(selectIsDuplicateId("3", null)(state)).toBe(false);
  });
});
