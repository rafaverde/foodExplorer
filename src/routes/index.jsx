import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"
import { USER_ROLE } from "../utils/roles"

import { AdminRoutes } from "./admin.routes"
import { CustomerRoutes } from "./customer.routes"
import { AuthRoutes } from "./auth.routes"

import { api } from "../services/api"

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get("/users/validated").catch((error) => {
      if (error.response?.status === 401) {
        console.log(error)
        signOut()
      }
    })
  }, [])

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  )
}
