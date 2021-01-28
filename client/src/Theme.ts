import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {main: "#121222"},
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    minHeight: "100vh",
                },
            },
        },
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                color: 'white',
            },
        },

    },
});