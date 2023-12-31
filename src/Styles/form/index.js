import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { Box, Button, Grid, TextField } from "@mui/material";

export const FormContainer = styled(Grid)(({ theme, fromBanner }) => ({
  background: Colors.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "5px 30px",
  borderRadius: "0 40px 0 40px ",
  position: `${fromBanner ? "relative" : ""}`,
  left: "10px",
  width: `${fromBanner ? "50%" : ""}`,
  height: `${fromBanner ? "75%" : ""}`,
  [theme.breakpoints.up("sm")]: {
    width: `${fromBanner ? "38%" : ""}`,
    left: "20px",
  },
  [theme.breakpoints.up("md")]: {
    width: `${fromBanner ? "30%" : ""}`,
    height: `${fromBanner ? "65%" : ""}`,
    left: "50px",
    top: "50px",
  },
  [theme.breakpoints.up("lg")]: {
    width: `${fromBanner ? "25%" : ""}`,
    height: `${fromBanner ? "65%" : ""}`,
    left: "70px",
    top: "70px",
  },
}));

export const FormFiledContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
}));

export const FormTextFiled = styled(TextField)(() => ({
  width: "100%",
  marginBottom: 10,
  textAlign: "right",
}));

export const SubmitButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "color",
  name: "FormButton",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  padding: "10px 5px",
  color: Colors.white,
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "5px 0 ",
    fontSize: "14px",
  },
}));
