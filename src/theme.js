import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { darken, lighten } from "@mui/system";

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: { main: "#556cd6" },
                secondary: { main: "#19857b" },
                customColor: { main: "#ff8a65", contrastText: "#000000" },
                background: {default: "#FCFCFC", paper: "#F5F6FA"}
            },
        },
        dark: {
            palette: {
                primary: { main: "#90caf9" },
                secondary: { main: "#f48fb1" },
                customColor: { main: "#ff8a65", contrastText: "#000000" },
                background: { default: "#05070A", paper: "#0C1017" },
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
    components: {
        MuiDateRangePicker: {
            styleOverrides: {
                input: {
                    fontSize: "0.875rem",
                    padding: 0,
                },
                button: {
                    padding: 0,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontSize: "0.875rem",
                    padding: 0,
                    color: theme.palette.primary.main,
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                }),
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.primary.main,
                        border: "2px solid",
                    },
                }),
            },
        },
    },
});

export default theme;
