import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
// import red from "@material-ui/core/colors/red"
import {
    red,
    orange,
    lightBlue,
    deepPurple,
    deepOrange,
} from "@material-ui/core/colors"
import { siteHeadingsColor } from "./sharedStyles"

// declare module "@material-ui/core/styles/createPalette" {
//     interface Palette {
//         accent: Palette["primary"]
//     }
//     interface PaletteOptions {
//         accent: PaletteOptions["primary"]
//     }
// }

const sharedHeadingStyles = {
    fontFamily: "Oswald, Roboto, 'Open Sans','Playfair Display', Times, serif",
    color: siteHeadingsColor,
    fontWeight: 500,
}

const commonTypography = {
    fontSize: 14,
    h1: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
        // textTransform: "uppercase",
        ...sharedHeadingStyles,
    },
    h2: {
        fontWeight: 300,
        fontSize: "3.75rem",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
        // textTransform: "uppercase",
        ...sharedHeadingStyles,
    },
    h3: {
        fontWeight: 400,
        fontSize: "3rem",
        lineHeight: 1.167,
        letterSpacing: "0em",
        // textTransform: "uppercase",
        ...sharedHeadingStyles,
    },
    h4: {
        fontWeight: 400,
        fontSize: "2.125rem",
        lineHeight: 1.235,
        letterSpacing: "0.00735em",
        // textTransform: "uppercase",
        ...sharedHeadingStyles,
    },
    h5: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: 1.334,
        letterSpacing: "0em",
        // textTransform: "uppercase",
        ...sharedHeadingStyles,
    },
    h6: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
        // textTransform: "uppercase",
        ...sharedHeadingStyles,
    },
}

// Create a theme instance.
const theme = createMuiTheme({
    typography: commonTypography,
    palette: {
        type: "dark",
        primary: {
            main: "#ff3333",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
})

export const light = createMuiTheme({
    typography: commonTypography,
    palette: {
        type: "light",
        primary: {
            main: lightBlue[900],
        },
        secondary: {
            // main: deepPurple[500],
            main: deepOrange[500],
        },
        background: {
            paper: "#fff",
            default: "#fafafa",
        },
    },
})

export const dark = createMuiTheme({
    typography: commonTypography,
    palette: {
        type: "dark",
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: deepOrange[900],
        },
        background: {
            paper: "#424242",
            default: "#303030",
        },
    },
})

export default responsiveFontSizes(theme)
