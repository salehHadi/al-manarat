import { Container, Typography } from "@mui/material";
import React from "react";
import "../Styles/pageStyles.css";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <Container>
        <Typography variant="h5" component="h2" className="aboutUs-text">
          عن المنارات الشامخة
        </Typography>
        <div>
          <img
            className="aboutUs-img"
            src="https://i.ibb.co/C7d9HPR/1.png"
            alt="img"
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
