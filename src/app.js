import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Main from 'main'

const App = () => (
    <>
        <GlobalStyle />
        <Main />
    </>
)

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace !important;
    }
`

export default App