import { createContext, useContext, useState } from "react"

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/theme"

export const UIContext = createContext({})

function UIProvider({ children }) {
  //Theme Mode
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function toggleThemeMode() {
    setIsDarkTheme((prevState) => !prevState)
  }

  //Side Menu functionalities
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function toggleSideMenu() {
    setMenuIsOpen((prevState) => !prevState)
  }

  //Returning provider
  return (
    <UIContext.Provider
      value={{
        isDarkTheme,
        menuIsOpen,
        toggleSideMenu,
        toggleThemeMode,
      }}
    >
      <ThemeProvider theme={!isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </UIContext.Provider>
  )
}

function useUI() {
  return useContext(UIContext)
}

export { UIProvider, useUI }
