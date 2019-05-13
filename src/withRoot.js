import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: blueGrey[300],
            main: blueGrey[500],
            dark: blueGrey[700],
        },
        secondary: {
            light: teal[300],
            main: teal[500],
            dark: teal[700],
        },
    },
    typography: {
        useNextVariants: true,
    },
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;
