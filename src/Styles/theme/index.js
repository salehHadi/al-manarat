import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#5b4279",
  secondary: "#de9826",
  thired: "#bdbdbf",

  lightGrayL: "#D3D3D3",
  shaft: "#2a2a2a",

  white: "#FFF",
  dark: "#151515",
};

export const FontFamily = {
  primary: `"Montez", "cursive"`,
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
