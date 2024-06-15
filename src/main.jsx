import React from "react"
import ReactDOM from "react-dom/client"

import { UIProvider } from "./hooks/ui"
import GlobalStyles from "./styles/global"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UIProvider>
      <GlobalStyles />
      <Routes />
    </UIProvider>
  </React.StrictMode>
)
