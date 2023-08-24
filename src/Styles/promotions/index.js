import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, FontFamily } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0 40px 0",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0 20px 0",
  overflow: "hidden",
  background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: FontFamily.primary,
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color: Colors.white,
  fontSize: "1.5rem",
}));
