import { Link, useNavigate } from "react-router-dom"

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { Brand, Container, LogOut, Menu, Search } from "./styles"

import {
  List,
  MagnifyingGlass,
  PlusCircle,
  Receipt,
  SignOut,
  BowlSteam,
} from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"
import darkLogo from "../../assets/food-explorer-dark-logo.svg"

import { Cart } from "../Cart"
import { Input } from "../Input"
import { Button } from "../Button"
import { SideMenu } from "../SideMenu"
import { IconButton } from "../IconButton"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { USER_ROLE } from "../../utils/roles"

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
      <Link to="/">
        <Brand>
          <img src={isDarkTheme ? darkLogo : logo} />
          {[USER_ROLE.ADMIN].includes(user.role) && <span>admin</span>}
        </Brand>
      </Link>
      <Search>
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(event) => setSearch(event.target.value)}
        />
      </Search>
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          <Button icon={Receipt} title="Pedidos (0)" className="order-button" />
          <Cart />
        </>
      )}
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <>
          <Button
            icon={PlusCircle}
            title="Novo Prato"
            className="order-button"
            onClick={() => navigate("/new")}
          />

          <Link to="/new" className="add-plate">
            <PlusCircle />
            <IconButton icon={BowlSteam} />
          </Link>
        </>
      )}

      <Link to="/profile" className="avatar">
        <img src={avatarURL} alt="avatar" />
      </Link>

      <LogOut onClick={handleSignOut}>
        <SignOut />
      </LogOut>
    </Container>
  )
}
