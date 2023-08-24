import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, FontFamily } from "../theme";
import "@fontsource/montez";

// Container
export const AppbarContainer = styled(Box)(() => ({
  backgroundColor: Colors.white,
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// Header
export const AppbarHeader = styled(Typography)(() => ({
  padding: `4px`,
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: FontFamily.primary,
  color: Colors.secondary,
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === `row` ? `flex` : `block`,
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
