import { MagnifyingGlass, SignOut, User, X } from "@phosphor-icons/react"

import { Header, Search, Nav } from "./styles"
import { Input } from "../Input"
import { Container } from "./styles"
import { IconButton } from "../IconButton"

export function SideMenu({ menuIsOpen, onCloseMenu }) {
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
          <IconButton title="Minha Conta" icon={User} />
          <IconButton title="Sair" icon={SignOut} />
        </Nav>
      </div>
    </Container>
  )
}
