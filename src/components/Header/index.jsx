import { Container, LogOut, Menu, Search } from "./styles"

import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"

import { Cart } from "../Cart"
import { Input } from "../Input"
import { Button } from "../Button"
import { SideMenu } from "../SideMenu"

import { useUI } from "../../hooks/ui"

export function Header({ onOpenMenu }) {
  const { menuIsOpen, toggleSideMenu } = useUI()

  return (
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => toggleSideMenu()} />
      <Menu onClick={() => toggleSideMenu()}>
        <List />
      </Menu>
      <img src={logo} />
      <Search>
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou igredientes"
        />
      </Search>
      <Button icon={Receipt} title="Pedidos (0)" className="order-button" />
      <Cart />
      <LogOut>
        <SignOut></SignOut>
      </LogOut>
    </Container>
  )
}
