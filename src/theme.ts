"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
  components: {
    // Disable ripples for all Material UI components
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    // Disable elevations (shadows) for buttons
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
