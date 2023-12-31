import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/componentStyle.css";
import { DataBase } from "../Provider";

const ProjectCard = (props) => {
  const { handleSingleProject } = useContext(DataBase);
  const { id, projectName, area, apartements, floors, roof, status, photo } =
    props;

  return (
    <Link to="/project-info">
      <Box className="project-card-box" onClick={() => handleSingleProject(id)}>
        <div style={{ width: "100%", height: "290px" }}>
          <img className="main-image" src={photo.secure_url} alt="img" />
          <p className="progect-card-name">{projectName}</p>
        </div>

        <div className="project-card-text">
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <Typography
                marginBottom={0}
                sx={{ mt: 1, mb: 1 }}
                variant="body1"
                component="p"
                color={"red"}
                fontWeight={"bold"}
              >
                {status}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                marginBottom={0}
                sx={{ mt: 1, mb: 1 }}
                variant="body2"
                component="p"
              >
                {floors}: عدد الأدوار
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                marginBottom={0}
                sx={{ mt: 1, mb: 1 }}
                variant="body2"
                component="p"
              >
                {area} :الحي
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                marginBottom={0}
                sx={{ mt: 1, mb: 1 }}
                variant="body2"
                component="p"
              >
                {roof}: عدد الملاحق
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                marginBottom={0}
                sx={{ mt: 1, mb: 1 }}
                variant="body2"
                component="p"
              >
                {apartements}: عدد الشقق
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Link>
  );
};

export default ProjectCard;
