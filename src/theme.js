import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: { main: "#556cd6" },
                secondary: { main: "#19857b" },
            },
        },
        dark: {
            palette: {
                primary: { main: "#90caf9" },
                secondary: { main: "#f48fb1" },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
});

export default theme;
