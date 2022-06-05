import { createTheme } from "@mui/material/styles";
import { blue, blueGrey, purple } from "@mui/material/colors";
// Create a theme instance.

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#efe",
    },
    secondary: {
      main: "#dd00ff",
      light: "#774B8D",
      dark: "#0F3E64",
      xlight: "#AC4B8D",
    },
    text: {
      primary: "#000000",
      secondary: "#242424",
    },

    grey: {
      main: "#dae8f5",
      dark: "#424242",
    },
    highlight: {
      main: "#333",
    },
    brand: {
      twitter: "#1DA1F2",
      facebook: "#3b5998",
      linkedin: "#0077B5",
    },

    background: {
      dark: "#DBECFF",
      main: "rgb(249, 250, 251)",
      light: "#1a2b42",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,

    body1: {
      color: "primary.light",
    },
    body2: {
      color: "primary.light",
    },
  },

  popoverPaper: {
    width: "90%",
    height: "80%",
    maxHeight: "unset",
    left: "5% !important",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        h1: {
          // fontSize: 65,
          fontWeight: 700,
          letterSpacing: -1.5,
          marginBottom: 18,
          marginTop: 0,
          lineHeight: 1,
          fontSize: pxToRem(40),
          ...responsiveFontSizes({ xs: 24, md: 40, lg: 64 }),
        },
        h2: {
          fontWeight: 700,
          letterSpacing: -0.9,
          marginTop: 0,
          marginBottom: 18,
          lineHeight: 1.1,
          fontSize: pxToRem(40),
          ...responsiveFontSizes({ xs: 20, md: 32, lg: 40 }),
        },
        h3: {
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: -0.5,
          marginTop: 0,
          marginBottom: 9,
          lineHeight: 1.1,
        },
        h4: {
          fontSize: 24,
          // marginTop: 18,
          fontWeight: 700,
          letterSpacing: -0.2,
          marginBottom: 2,
          lineHeight: 1.1,
        },
        h5: {
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: -0.2,
          marginBottom: 2,
          lineHeight: 1.1,
          marginTop: 0,
        },
        h6: {
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: -0.5,
          marginBottom: 2,
          lineHeight: 1.1,
        },
      },
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: theme.components.MuiCssBaseline.styleOverrides.h1,
    h2: theme.components.MuiCssBaseline.styleOverrides.h2,
    h3: theme.components.MuiCssBaseline.styleOverrides.h3,
    h4: theme.components.MuiCssBaseline.styleOverrides.h4,
    h5: theme.components.MuiCssBaseline.styleOverrides.h5,
    h6: theme.components.MuiCssBaseline.styleOverrides.h6,

    subhead: {
      fontSize: 30,
      fontWeight: 500,
      color: theme.palette.primary.light,
      lineHeight: 1.2,
      marginTop: 16,
      marginBottom: 32,
      letterSpacing: -0.4,
      color: theme.palette.primary.main,
    },
    eyebrow: {
      fontSize: 20,
      fontWeight: 500,
      color: theme.palette.primary.light,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: theme.palette.secondary.light,
        },
        body: {
          backgroundColor: "#000",
          color: theme.palette.primary.main,
        },
        h1: {
          color: theme.palette.primary.main,
        },
        h2: {
          color: theme.palette.secondary.main,
        },
        h3: {
          color: theme.palette.primary.main,
        },
        h4: {
          color: theme.palette.primary.main,
        },
        h5: {
          color: theme.palette.primary.main,
        },
        h6: {
          color: theme.palette.primary.main,
        },
        ".testClass": {
          alignItems: "center",
        },
        button: {
          backgroundColor: "theme.palette.primary.main",
          color: "#fff",
        },
        ".gf-label": {
          color: theme.palette.primary.main,
          display: "block",
        },
        ".ginput_left, .ginput_right": {
          fontSize: ".8rem",
        },
        ".checkboxes": {
          border: "none",
          padding: "none",
        },
        input: {
          marginBottom: "16px",
        },
        fieldset: {
          margin: "0",
          padding: "0",
        },
        ".lead": {
          fontSize: "1.4rem",
        },
      },
    },
  },
});

export default theme;
