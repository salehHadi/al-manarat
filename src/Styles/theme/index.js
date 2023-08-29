import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.primary,
          color: Colors.white,
          borderRadius: "0px 100px 0 0",
          borderRight: `1px solid ${Colors.white}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.primary),
        },
      },
    },
    FormButton: {
      styleOverrides: {
        roots: {
          color: Colors.white,
        },
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
        secondary: {
          background: Colors.secondary,
          "&:hover": {
            background: lighten(0.05, Colors.secondary),
          },
        },
      },
    },
  },
});

export default theme;
