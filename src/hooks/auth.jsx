import { createContext, useContext } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  async function signIn({ email, password }) {}

  return (
    <AuthContext.Provider
      value={{ name: "Rafael ", email: "rafaverde@email.com" }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
