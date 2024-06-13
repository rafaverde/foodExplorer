import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { PlateDetail } from "../pages/PlateDetail"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plate/:id" element={<PlateDetail />} />
    </Routes>
  )
}
