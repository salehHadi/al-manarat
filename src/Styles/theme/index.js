import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#5b4279",
  secondary: "#de9826",
  thired: "#bdbdbf",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
