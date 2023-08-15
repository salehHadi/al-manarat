import React from "react";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import AboutUs from "./Pages/AboutUs";
import Header from "./components/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <AllProjects />
      <AboutUs />
    </div>
  );
};

export default Main;
