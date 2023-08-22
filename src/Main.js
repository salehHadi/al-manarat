import React from "react";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import AboutUs from "./Pages/AboutUs";
import Header from "./components/Header";
import { Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./Styles/theme";
import Appbar from "./components/appbar";

const Main = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="xl">
          <Appbar />
          <Home />
          <AllProjects />
          <AboutUs />
        </Container>
        <Button variant="contained">hi</Button>
      </ThemeProvider>
    </div>
  );
};

export default Main;
