import { createContext, useContext, useEffect, useState } from "react"

import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../styles/theme"
import GlobalStyles from "../styles/global"

export const UIContext = createContext({})

function UIProvider({ children }) {
  const checkUserTheme = localStorage.getItem("@foodexplorer:theme")

  //Theme Mode manipulation
  const [isDarkTheme, setIsDarkTheme] = useState(
    checkUserTheme.toLowerCase() === "true"
  )

  function toggleThemeMode() {
    setIsDarkTheme((prevState) => !prevState)
  }

  useEffect(() => {
    localStorage.setItem("@foodexplorer:theme", isDarkTheme)
  }, [isDarkTheme])

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
        setIsDarkTheme,
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
