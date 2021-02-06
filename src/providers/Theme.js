import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";

const lightTheme = createMuiTheme({
    typography: {
        fontFamily: [
            // '-apple-system',
            // 'BlinkMacSystemFont',
            'Roboto',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: teal[800]  //#00695c
        },
        secondary: {
            main: "#52c7b8"
        },
        background: {
            paper: grey[50],
            default: grey.A100
        },
        type: "light"
    },
    overrides: {
        // Style sheet name
        MuiButton: {
            // Name of the rule
            root: {
                // Some CSS
                fontWeight: "bolder"
            },
        },
        MuiInputBase: {
            input: {
                paddingTop: 6,
                paddingBottom: 7
            }
        },

    },
    screenWidth: "700px",
    menuButton: {
        padding: 6,
        margin: 1
    },
    menuIcon: {
        width: 32,
        height: 32
    },
});

const darkTheme = createMuiTheme({
    typography: {
        fontFamily: [
            // '-apple-system',
            // 'BlinkMacSystemFont',
            'Roboto',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: teal[800] //#00695c
        },
        secondary: {
            main: "#52c7b8"
        },
        type: "dark"
    },
    overrides: {
        // Style sheet name
        MuiButton: {
            // Name of the rule
            root: {
                // Some CSS
                fontWeight: "bolder"
            },
        },
        MuiInputBase: {
            input: {
                paddingTop: 6,
                paddingBottom: 7
            }
        },
    },
    screenWidth: "700px",
    menuButton: {
        padding: 6,
        margin: 1
    },
    menuIcon: {
        width: 32,
        height: 32
    },
});

function AppThemeProvider({ children }) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = prefersDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export default AppThemeProvider;