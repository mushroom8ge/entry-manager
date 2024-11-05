import { createSlice } from "@reduxjs/toolkit";

const entriesSlice = createSlice({
  name: "entries",
  initialState: {
    entries: [],
    editData: null,
  },
  reducers: {
    addEntry: (state, action) => {
      const newEntry = action.payload;

      // If ID is not provided, generate the next available ID
      if (!newEntry.id) {
        const maxId =
          state.entries.length > 0
            ? Math.max(...state.entries.map((entry) => parseInt(entry.id, 10)))
            : 0;
        newEntry.id = (maxId + 1).toString();
      }

      state.entries.push(newEntry);
    },
    updateEntry: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.entries.findIndex((entry) => entry.id === id);
      if (index !== -1) {
        state.entries[index] = newData;
      }
    },
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
    },
    setEditData: (state, action) => {
      state.editData = action.payload;
    },
    clearEditData: (state) => {
      state.editData = null;
    },
  },
});

export const {
  addEntry,
  updateEntry,
  deleteEntry,
  setEditData,
  clearEditData,
} = entriesSlice.actions;
export default entriesSlice.reducer;
