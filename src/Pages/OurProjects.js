import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import "../Styles/pageStyles.css";
import { DataBase } from "../Provider";

const OurProjects = () => {
  const { data } = useContext(DataBase);
  console.log(data);
  const displayProjectCard = data.map((data) => (
    <ProjectCard
      key={data.id}
      id={data.id}
      projectName={data.projectName}
      status={data.status}
      area={data.area}
      floors={data.floors}
      img={data.image}
      roof={data.roof}
      flats={data.apartements}
    />
  ));

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

export default OurProjects;
