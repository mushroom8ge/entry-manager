import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addEntry,
  updateEntry,
  deleteEntry,
  setEditData,
  clearEditData,
} from "../../features/entries/entriesSlice";
import {
  selectFilteredEntries,
  selectEditDataEntry,
} from "../../features/entries/selectors";
import Table from "../Table/Table";
import ModalForm from "../ModalForm/ModalForm";
import AddButton from "../common/AddButton";
import { Container, Header as StyledHeader, SearchBar } from "./useStyles";
import useDebounce from "../../hooks/useDebounce";
import { fieldsConfig } from "../ModalForm/formConfig";
import Header from "../common/Header";

const ContainerComponent = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const filteredEntries = useSelector(
    selectFilteredEntries(debouncedSearchTerm, fieldsConfig)
  );
  const editDataEntry = useSelector(selectEditDataEntry);

  const handleAddClick = () => {
    dispatch(clearEditData());
    setShowModal(true);
  };

  const handleEditClick = (entry) => {
    dispatch(setEditData({ ...entry }));
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (confirmDelete) {
      dispatch(deleteEntry(id));
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (formData) => {
    if (editDataEntry?.id) {
      dispatch(updateEntry({ id: editDataEntry.id, newData: formData }));
    } else {
      dispatch(addEntry(formData));
    }
    handleModalClose();
  };

  return (
    <>
      <Header />
      <Container>
        <StyledHeader>
          <AddButton onClick={handleAddClick} />
          <SearchBar
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </StyledHeader>
        <Table
          entries={filteredEntries}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          fieldsConfig={fieldsConfig}
        />
        {showModal && (
          <ModalForm
            show={showModal}
            handleClose={handleModalClose}
            editData={editDataEntry}
            onSubmit={handleSubmit}
            fieldsConfig={fieldsConfig}
          />
        )}
      </Container>
    </>
  );
};

export default ContainerComponent;
