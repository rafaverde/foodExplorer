import React from "react"
import ReactDOM from "react-dom/client"

import { UIProvider } from "./hooks/ui"

import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"
import { darkTheme } from "./styles/theme"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <UIProvider>
        <GlobalStyles />
        <Routes />
      </UIProvider>
    </ThemeProvider>
  </React.StrictMode>
)
