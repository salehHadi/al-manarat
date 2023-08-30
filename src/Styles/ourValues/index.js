import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ValuesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "end",
  width: "100%",
  height: "450px",
  padding: "20px 0px",
  marginBottom: 70,
  marginTop: 80,
  [theme.breakpoints.up("md")]: {
    height: "850px",
    padding: "10%",
    alignItems: "center",
  },
}));

export const Image = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  objectFit: "fill",
  objectPosition: "center center",
  repeat: "no-repeat",
}));
