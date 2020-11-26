import React from "react"
import { createGlobalStyle, ThemeProvider} from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: white;
    }

`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        {element}
    </ThemeProvider>

)