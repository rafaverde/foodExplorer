import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/sessions",
        { email, password },
        { withCredentials: true }
      )
      const { user } = response.data

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível fazer login. Tente novamente.")
      }

      localStorage.removeItem("@foodexplorer:user")
      await api.delete("/sessions/logout")

      setData({})
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user")
    await api.delete("/sessions/logout")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile && avatarFile !== null) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        console.log(fileUploadForm)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
        console.log(response)
      }

      await api.put("/users", user)
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

      setData({ user })
      alert("Perfil atualizado com sucesso.")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o perfil. Tente novamente.")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user")

    if (user) {
      setData({
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        updateUserFavourites,
        user: data.user,
      }}
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
