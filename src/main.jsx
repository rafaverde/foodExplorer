import React from "react"
import ReactDOM from "react-dom/client"

import { UIProvider } from "./hooks/ui"
import { AuthProvider } from "./hooks/auth"

import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UIProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </UIProvider>
  </React.StrictMode>
)
