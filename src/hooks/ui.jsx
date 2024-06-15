import { createContext, useContext, useState } from "react"

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/theme"
import GlobalStyles from "../styles/global"

export const UIContext = createContext({})

function UIProvider({ children }) {
  //Theme Mode manipulation
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function toggleThemeMode() {
    setIsDarkTheme((prevState) => !prevState)
  }

  //Side Menu manipulation
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function toggleSideMenu() {
    setMenuIsOpen((prevState) => !prevState)
  }

  //Returning ui and theme providers
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
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </UIContext.Provider>
  )
}

function useUI() {
  return useContext(UIContext)
}

export { UIProvider, useUI }
