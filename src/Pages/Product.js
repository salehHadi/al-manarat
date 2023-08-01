import React, { useContext } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { DataBase } from "../Provider";

import "../Styles/componentStyle.css";
const Product = () => {
  const { prodectInfo } = useContext(DataBase);
  // add img later
  const { projectName, area, flats, floors, roof, status } = prodectInfo;

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
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1550136513-548af4445338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
            alt="img"
          />
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
                {flats}: عدد الشقق
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

export default Product;
