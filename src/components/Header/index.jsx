import { Link } from "react-router-dom"

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { Container, LogOut, Menu, Search } from "./styles"

import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"
import darkLogo from "../../assets/food-explorer-dark-logo.svg"

import { Cart } from "../Cart"
import { Input } from "../Input"
import { Button } from "../Button"
import { SideMenu } from "../SideMenu"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"

export function Header({ onOpenMenu }) {
  const { menuIsOpen, toggleSideMenu, isDarkTheme } = useUI()
  const { signOut } = useAuth()

  return (
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => toggleSideMenu()} />
      <Menu onClick={() => toggleSideMenu()}>
        <List />
      </Menu>
      <img src={isDarkTheme ? darkLogo : logo} />
      <Search>
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou igredientes"
        />
      </Search>
      <Button icon={Receipt} title="Pedidos (0)" className="order-button" />
      <Cart />

      <Link to="/profile">
        <img src={avatarPlaceHolder} alt="avatar" />
      </Link>

      <LogOut onClick={signOut}>
        <SignOut></SignOut>
      </LogOut>
    </Container>
  )
}
