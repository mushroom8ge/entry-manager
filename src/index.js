import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
