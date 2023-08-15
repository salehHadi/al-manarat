import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import "../Styles/pageStyles.css";
import { DataBase } from "../Provider";

const AllProjects = () => {
  const { data } = useContext(DataBase);

  const displayProjectCard = data.map((data) => (
    <ProjectCard
      key={data._id}
      id={data._id}
      projectName={data.projectName}
      status={data.status}
      area={data.area}
      floors={data.floors}
      img={data.image}
      roof={data.roofs}
      apartements={data.appartements}
      photo={data.photo}
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

export default AllProjects;
