import { createContext, useContext, useState } from "react"

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/theme"
import GlobalStyles from "../styles/global"

export const UIContext = createContext({})

function UIProvider({ children }) {
  //Theme Mode manipulation
  const checkUserTheme = localStorage.getItem("@foodexplorer:theme")
  const [isDarkTheme, setIsDarkTheme] = useState(checkUserTheme)

  function toggleThemeMode() {
    setIsDarkTheme((prevState) => !prevState)
    localStorage.setItem("@foodexplorer:theme", isDarkTheme)
  }

  //Side Menu manipulation
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function toggleSideMenu() {
    setMenuIsOpen((prevState) => !prevState)
  }

  //Search states
  const [search, setSearch] = useState("")

  //Returning ui and theme providers
  return (
    <UIContext.Provider
      value={{
        isDarkTheme,
        menuIsOpen,
        toggleSideMenu,
        toggleThemeMode,
        search,
        setSearch,
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
