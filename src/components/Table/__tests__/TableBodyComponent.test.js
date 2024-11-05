import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TableBodyComponent from "../TableBodyComponent";

describe("TableBodyComponent", () => {
  const mockEntries = [
    {
      id: "1",
      type: "Capture Alphanumeric",
      prompt: "Test Prompt",
      stage: "Stage 1",
      enabled: true,
    },
    {
      id: "2",
      type: "Capture Float",
      prompt: "Another Prompt",
      stage: "Stage 2",
      enabled: false,
    },
  ];

  const fieldsConfig = [
    { name: "id", label: "ID" },
    { name: "type", label: "Type" },
    { name: "prompt", label: "Prompt" },
    { name: "stage", label: "Stage" },
    { name: "enabled", label: "Enabled" },
  ];

  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  it("renders table body with entries", () => {
    const { getByText } = render(
      <TableBodyComponent
        entries={mockEntries}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        fieldsConfig={fieldsConfig}
      />
    );

    expect(getByText("Test Prompt")).toBeInTheDocument();
    expect(getByText("Another Prompt")).toBeInTheDocument();
  });

  it("calls onEdit and onDelete when buttons are clicked", () => {
    const { getAllByText } = render(
      <TableBodyComponent
        entries={mockEntries}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        fieldsConfig={fieldsConfig}
      />
    );

    const editButtons = getAllByText("Edit");
    fireEvent.click(editButtons[0]);
    expect(mockOnEdit).toHaveBeenCalledWith(mockEntries[0]);

    const deleteButtons = getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);
    expect(mockOnDelete).toHaveBeenCalledWith(mockEntries[0].id);
  });
});
