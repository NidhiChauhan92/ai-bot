import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./pages/Main";

const theme = createTheme({
  palette: {
    background: {
      default: "#f3f0fb",
    },
    primary: {
      main: "#D7C7F4",
    },
    text: {
      primary: "#333",
    },
  },
  shape: {
    borderRadius: 12,
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}