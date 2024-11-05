import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
}));

export const Header = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const SearchBar = styled(TextField)(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "10px",
  },
}));
