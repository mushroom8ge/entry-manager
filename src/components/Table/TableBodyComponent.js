import React from "react";
import { formatFieldValue } from "../../utils/formatFieldValue";
import TableActionButtons from "./TableActionButtons";

const TableBodyComponent = ({ entries, onEdit, onDelete, fieldsConfig }) => (
  <tbody>
    {entries.map((entry) => (
      <tr key={entry.id}>
        {fieldsConfig.map(({ name }) => (
          <td key={name}>{formatFieldValue(name, entry[name])}</td>
        ))}
        <td>
          <TableActionButtons
            onEdit={() => onEdit(entry)}
            onDelete={() => onDelete(entry.id)}
          />
        </td>
      </tr>
    ))}
  </tbody>
);

export default TableBodyComponent;
