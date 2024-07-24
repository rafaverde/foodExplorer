import { useNavigate } from "react-router-dom"

import { Container } from "./styles"
import { Receipt } from "@phosphor-icons/react"

import { useUI } from "../../hooks/ui"

export function Cart({ icon: Icon, count, ...rest }) {
  const { orderItems } = useUI()
  const navigate = useNavigate()

  return (
    <Container onClick={() => navigate("/payment")}>
      <Receipt />
      <div className="receipt-counter">
        <span>{orderItems.length}</span>
      </div>
    </Container>
  )
}
