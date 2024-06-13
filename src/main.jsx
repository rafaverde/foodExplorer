import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"
import { UIProvider } from "./hooks/ui"

import { Routes } from "./routes"

import { lightTheme, darkTheme } from "./styles/theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <UIProvider>
        <Routes />
      </UIProvider>
    </ThemeProvider>
  </React.StrictMode>
)
