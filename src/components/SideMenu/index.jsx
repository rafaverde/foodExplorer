import { Link, useNavigate } from "react-router-dom"

import {
  MagnifyingGlass,
  Receipt,
  SignOut,
  User,
  X,
  Heart,
  BowlSteam,
} from "@phosphor-icons/react"

import { Header, Search, Nav } from "./styles"
import { Input } from "../Input"
import { Container } from "./styles"
import { IconButton } from "../IconButton"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

export function SideMenu({ onCloseMenu }) {
  const { menuIsOpen } = useUI()
  const { signOut, user } = useAuth()
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
          {[USER_ROLE.ADMIN].includes(user.role) && (
            <Link to="/new">
              <IconButton
                title="Novo Prato"
                icon={BowlSteam}
                onClick={onCloseMenu}
              />
            </Link>
          )}
          <Link to="/profile">
            <IconButton title="Minha Conta" icon={User} onClick={onCloseMenu} />
          </Link>
          <IconButton title="Meus Pedidos" icon={Receipt} />
          <IconButton
            title="Meus Favoritos"
            icon={Heart}
            onClick={() => navigate("/favourites")}
          />
          <IconButton title="Sair" icon={SignOut} onClick={handleSignOut} />
        </Nav>
      </div>
    </Container>
  )
}
