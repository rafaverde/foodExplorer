import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"

import { lightTheme, darkTheme } from "./styles/theme"

import { Home } from "./pages/Home"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)
