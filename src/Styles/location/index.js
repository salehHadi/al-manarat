import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LocationContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  flexDirection: "column",
  marginTop: 100,
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
}));

export const MapContainer = styled(Box)(({ theme }) => ({
  marginTop: 10,
  padding: "10px",
  width: "100%",
  height: "360px",
  [theme.breakpoints.up("md")]: {
    padding: "25px",
    height: "450px",
  },
}));
