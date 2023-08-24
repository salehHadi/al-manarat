import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, FontFamily } from "../theme";

export const SectionName = styled(Typography)(({ theme }) => ({
  background: Colors.primary,
  color: Colors.white,
  fontFamily: FontFamily.primary,
  fontSize: "1.5rem",
  padding: "5px 20px",
  borderTopRightRadius: "30px",
  borderBottomLeftRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
    padding: "10px 40px",
    borderRadius: "5px",
  },
}));

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "10px",
  width: "300px",
  position: "relative",
  marginBottom: 10,
  [theme.breakpoints.up("md")]: {
    width: "280px",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  overflow: "none",
  borderTopRightRadius: "50px",
  [theme.breakpoints.down("md")]: {},
}));

export const ProductName = styled(Typography)(() => ({
  width: "150px",
  height: "40px",
  background: Colors.primary,
  color: Colors.white,
  fontWeight: "bold",
  fontFamily: FontFamily.primary,
  position: "absolute",
  right: "20px",
  top: "0",
  borderTopRightRadius: "50px",
  borderBottomLeftRadius: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ProductMetaContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridRow: "35px 35px 35px",
  gridColumn: "50% 50%",
  width: "100%",
  background: Colors.white,
}));

export const ProductIconButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));
