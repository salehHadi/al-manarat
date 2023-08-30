import React from "react";
import AboutUs from "./Pages/AboutUs";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./Styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Products from "./components/products";
import Footer from "./components/footer";
import OurValues from "./components/ourValues";
import Drawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import Location from "./components/location";

const Main = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <UIProvider>
            <Appbar />
            <Banner />
            <Location />
            <Products />
            <AboutUs />
            <OurValues />
            <Footer />
            <Drawer />
          </UIProvider>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Main;
