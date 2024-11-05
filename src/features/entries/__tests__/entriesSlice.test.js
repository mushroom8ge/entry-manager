import entriesReducer, {
  addEntry,
  updateEntry,
  deleteEntry,
  setEditData,
  clearEditData,
} from "../entriesSlice";

describe("entriesSlice", () => {
  const initialState = {
    entries: [],
    editData: null,
  };

  it("should handle initial state", () => {
    expect(entriesReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle addEntry", () => {
    const newEntry = {
      id: "1",
      type: "Type1",
      prompt: "Prompt1",
      stage: "Stage1",
      enabled: true,
    };
    expect(entriesReducer(initialState, addEntry(newEntry))).toEqual({
      ...initialState,
      entries: [newEntry],
    });
  });
});
