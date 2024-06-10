import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from "styled-components"

import { lightTheme, darkTheme } from "./styles/theme"

import { Home } from "./pages/Home"
import { SignIn } from "./pages/SignIn"
import { SignOut } from "./pages/SignOut"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <SignOut />
    </ThemeProvider>
  </React.StrictMode>
)
