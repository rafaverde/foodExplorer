import { createContext, useContext, useState } from "react"

export const UIContext = createContext({})

function UIProvider({ children }) {
  //Side Menu functionalities
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function toggleSideMenu() {
    setMenuIsOpen((prevState) => !prevState)
  }

  //Returning functionalities
  return (
    <UIContext.Provider value={{ menuIsOpen, toggleSideMenu }}>
      {children}
    </UIContext.Provider>
  )
}

function useUI() {
  const context = useContext(UIContext)

  return context
}

export { UIProvider, useUI }
