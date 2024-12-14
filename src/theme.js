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
        }
    },
});

export default theme;
