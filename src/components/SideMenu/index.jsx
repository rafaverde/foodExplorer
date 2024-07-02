import { Link, useNavigate } from "react-router-dom"

import {
  MagnifyingGlass,
  Receipt,
  SignOut,
  User,
  X,
  Heart,
} from "@phosphor-icons/react"

import { Header, Search, Nav } from "./styles"
import { Input } from "../Input"
import { Container } from "./styles"
import { IconButton } from "../IconButton"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"

export function SideMenu({ onCloseMenu }) {
  const { menuIsOpen } = useUI()
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    onCloseMenu()
    signOut()
    navigate("/")
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <span>Menu</span>
        <IconButton icon={X} onClick={onCloseMenu} />
      </Header>
      <div id="menu_wrapper">
        <Search>
          <Input
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou igredientes"
          />
        </Search>

        <Nav>
          <Link to="/profile">
            <IconButton title="Minha Conta" icon={User} onClick={onCloseMenu} />
          </Link>
          <IconButton title="Meus Pedidos" icon={Receipt} />
          <IconButton title="Meus Favoritos" icon={Heart} />
          <IconButton title="Sair" icon={SignOut} onClick={handleSignOut} />
        </Nav>
      </div>
    </Container>
  )
}
