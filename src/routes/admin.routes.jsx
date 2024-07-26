import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { PlateDetail } from "../pages/PlateDetail"
import { Profile } from "../pages/Profile"
import { NewPlate } from "../pages/NewPlate"
import { EditPlate } from "../pages/EditPlate"
import { MyFavourites } from "../pages/MyFavourites"
import { Payment } from "../pages/Payment"
import { NotFound } from "../pages/NotFound"
import { MyOrders } from "../pages/MyOrders"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plate/:id" element={<PlateDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<NewPlate />} />
      <Route path="/edit/:id" element={<EditPlate />} />
      <Route path="/favourites" element={<MyFavourites />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
