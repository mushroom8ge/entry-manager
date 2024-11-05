import { createSelector } from "@reduxjs/toolkit";
import Entry from "../../models/Entry";

export const selectEntries = (state) => state.entries.entries;

export const selectIsDuplicateId = (id, editDataId) =>
  createSelector([selectEntries], (entries) => {
    return entries.some(
      (entry) =>
        Number(entry.id) === Number(id) &&
        (!editDataId || Number(entry.id) !== Number(editDataId))
    );
  });

export const selectFilteredEntries = (searchTerm, fieldsConfig) =>
  createSelector([selectEntries], (entries) => {
    const debouncedSearchTerm = searchTerm.toLowerCase();

    return entries.filter((entry) =>
      fieldsConfig.some(({ name }) => {
        const fieldValue =
          name === "enabled"
            ? entry[name]
              ? "yes"
              : "no"
            : entry[name].toString().toLowerCase();

        return fieldValue.includes(debouncedSearchTerm);
      })
    );
  });

// Memoized selector to return the editData entry as an Entry instance
export const selectEditDataEntry = createSelector(
  [(state) => state.entries.editData],
  (editData) => {
    return editData ? new Entry(editData) : null;
  }
);
