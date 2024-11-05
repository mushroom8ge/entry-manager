import React from "react";

const TableHeadComponent = ({ fieldsConfig }) => (
  <thead>
    <tr>
      {fieldsConfig.map(({ label }) => (
        <th key={label}>{label}</th>
      ))}
      <th>Actions</th>
    </tr>
  </thead>
);

export default TableHeadComponent;
