import { Container } from "./styles"
import { Receipt } from "@phosphor-icons/react"

export function Cart({ icon: Icon, count, ...rest }) {
  return (
    <Container>
      <Receipt />
      <div className="counter">
        <span>0</span>
      </div>
    </Container>
  )
}
