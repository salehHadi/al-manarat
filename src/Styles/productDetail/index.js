import { Box, styled } from "@mui/material";

export const ProductDetailContainer = styled(Box)(() => ({
  marginTop: 55,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
}));

export const ButtonItemsContainer = styled(Box)(() => ({
  width: "100%",
  padding: "0 25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  top: "55%",
}));

export const ImageContainer = styled(Box)(() => ({
  width: "350px",
  height: "350px",
}));

export const Image = styled("img")(({ src }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  src: `url(${src})`,
}));
