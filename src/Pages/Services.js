import { Container, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../Styles/pageStyles.css";
import data from "../data.json";

const Services = () => {
  return (
    <div className="ourProducts-container">
      <Container>
        <Typography variant="h5" component="h2" className="ourProducts-text">
          مشاريعنا
        </Typography>
        <div style={{ textAlign: "center" }}>{displayProjectCard}</div>
      </Container>
    </div>
  );
};

export default Services;
