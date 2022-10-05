import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00274C",
    },
    secondary: {
      main: "#FFCB05",
    },
    background: {
      default: "#FAF9F6",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path={"/about"} exact component={AboutPage} />
            <Route path={"/contact"} component={ContactPage} />
            <Route path={"/"} component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
