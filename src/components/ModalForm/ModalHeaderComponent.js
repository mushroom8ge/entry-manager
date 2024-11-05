import React from "react";
import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(2),
}));

const ModalHeaderComponent = ({ title, handleClose }) => (
  <HeaderContainer>
    <Typography variant="h6">{title}</Typography>
    <IconButton aria-label="close" onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  </HeaderContainer>
);

export default ModalHeaderComponent;
