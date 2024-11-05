import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import TableHeadComponent from "./TableHeadComponent";
import TableBodyComponent from "./TableBodyComponent";
import "./style/Table.css";

const Table = ({ entries, onEdit, onDelete, fieldsConfig }) => {
  return (
    <div className="card">
    <BootstrapTable hover responsive>
      <TableHeadComponent fieldsConfig={fieldsConfig} />
      <TableBodyComponent
        entries={entries}
        onEdit={onEdit}
        onDelete={onDelete}
        fieldsConfig={fieldsConfig}
      />
    </BootstrapTable>
    </div>
  );
};

export default Table;
