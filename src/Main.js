import React from "react";
import AboutUs from "./Pages/AboutUs";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./Styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Products from "./components/products";
import Footer from "./components/footer";

const Main = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Appbar />
          <Banner />
          <Promotions />
          <Products />
          <AboutUs />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Main;
