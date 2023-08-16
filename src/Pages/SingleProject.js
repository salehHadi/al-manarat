import React, { useContext } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { DataBase } from "../Provider";
import "../Styles/componentStyle.css";
import { useNavigate } from "react-router-dom";

const SingleProject = () => {
  const { projectInfo } = useContext(DataBase);

  // if there is no detailes the user back to home page
  const usenavigate = useNavigate();
  function handleRedirect() {
    console.log("work");
    usenavigate("/");
  }
  if (!projectInfo) {
    handleRedirect();
  }
  const { projectName, area, appartements, floors, roofs, status, photo } =
    projectInfo;

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box className="project-card-box">
        <div style={{ width: "100%", height: "290px" }}>
          {projectInfo && (
            <img className="main-image" src={photo.secure_url} alt="img" />
          )}
          <p className="progect-card-name">{projectName}</p>
        </div>

        <div className="project-card-text">
          <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                {roofs}: عدد, photo الملاحق
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                marginBottom={0}
                sx={{ mt: 1, mb: 1 }}
                variant="body2"
                component="p"
              >
                {appartements}: عدد الشقق
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box>
        <Typography variant="h4" component="h2" textAlign="right">
          Project Picture
        </Typography>
      </Box>
    </Container>
  );
};

export default SingleProject;
