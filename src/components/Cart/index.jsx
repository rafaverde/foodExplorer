import { Container } from "./styles"
import { ShoppingBag } from "@phosphor-icons/react"

export function Cart({ icon: Icon, count, ...rest }) {
  return (
    <Container>
      <ShoppingBag />
      <div className="counter">
        <span>0</span>
      </div>
    </Container>
  )
}
