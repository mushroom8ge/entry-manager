import React from "react";
import { render } from "@testing-library/react";
import TableHeadComponent from "../TableHeadComponent";

const mockFieldsConfig = [
  { name: "id", label: "ID" },
  { name: "type", label: "Type" },
  { name: "prompt", label: "Prompt" },
  { name: "stage", label: "Stage" },
  { name: "enabled", label: "Enabled" },
];

describe("TableHeadComponent", () => {
  it("renders table head correctly", () => {
    const { getByText } = render(
      <TableHeadComponent fieldsConfig={mockFieldsConfig} />
    );

    // Check if each header cell is rendered
    mockFieldsConfig.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });

    // Check for Actions column
    expect(getByText("Actions")).toBeInTheDocument();
  });
});
