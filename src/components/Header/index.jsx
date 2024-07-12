import { Link, useNavigate } from "react-router-dom"

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
import { api } from "../../services/api"

export function Header({ onOpenMenu }) {
  const { menuIsOpen, toggleSideMenu, isDarkTheme, setSearch } = useUI()
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/avatar/${user.avatar}`
    : avatarPlaceHolder

  function handleSignOut() {
    navigate("/")
    signOut()
  }

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
          placeholder="Busque por pratos ou ingredientes"
          onChange={(event) => setSearch(event.target.value)}
        />
      </Search>
      <Button icon={Receipt} title="Pedidos (0)" className="order-button" />
      <Cart />

      <Link to="/profile">
        <img src={avatarURL} alt="avatar" />
      </Link>

      <LogOut onClick={handleSignOut}>
        <SignOut></SignOut>
      </LogOut>
    </Container>
  )
}
