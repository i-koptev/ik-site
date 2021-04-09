import React, { useState } from "react"
import Head from "next/head"
import { AppProps } from "next/app"

import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
// import theme from "../theme"
import { light, dark } from "../theme"

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles)
        }
    }, [])

    // Dark mode implementation - START

    const [darkState, setDarkState] = useState(false)
    const currentTheme = darkState
        ? responsiveFontSizes(dark)
        : responsiveFontSizes(light)

    const handleThemeChange = () => {
        setDarkState(!darkState)
    }
    // Dark mode implementation - END

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            {/* <ThemeProvider theme={theme}> */}
            <ThemeProvider theme={currentTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component
                    {...pageProps}
                    handleThemeChange={handleThemeChange}
                />
            </ThemeProvider>
        </React.Fragment>
    )
}
