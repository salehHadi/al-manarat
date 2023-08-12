import React from "react";
import Home from "./Pages/Home";
import OurProjects from "./Pages/OurProjects";
import AboutUs from "./Pages/AboutUs";
import Header from "./components/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <OurProjects />
      <AboutUs />
    </div>
  );
};

export default Main;
