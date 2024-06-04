import { Container } from "./styles"
import { List } from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"

import { Cart } from "../Cart"

export function Header() {
  return (
    <Container>
      <List size={32} />
      <img src={logo} />
      <Cart />
    </Container>
  )
}
