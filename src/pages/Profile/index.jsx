import { useNavigate } from "react-router-dom"

import { Avatar, Container, Content, Form, Menu, Nav } from "./styles"
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import {
  Camera,
  CaretCircleLeft,
  Envelope,
  User,
  X,
  Receipt,
  Heart,
  SignOut,
  Lock,
} from "@phosphor-icons/react"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input"
import { SwitchButton } from "../../components/SwitchButton"

import { useUI } from "../../hooks/ui"

export function Profile() {
  const { toggleThemeMode } = useUI()
  const navigate = useNavigate()

  function handleBackButton() {
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          title="Voltar"
          icon={CaretCircleLeft}
          $isactive
          onClick={handleBackButton}
        />

        <Menu>
          <Form>
            <Avatar>
              <img src={avatarPlaceHolder} alt="User Avatar" />
              <label htmlFor="avatar">
                <Camera />
                <input type="file" id="avatar" />
              </label>
              <IconButton icon={X} className="close-button" />
            </Avatar>

            <SwitchButton
              onSwitchButton={() => {
                toggleThemeMode()
              }}
            />
            <Input placeholder="Nome" type="text" icon={User} />
            <Input placeholder="E-mail" type="text" icon={Envelope} />
            <Input placeholder="Senha Atual" type="password" icon={Lock} />
            <Input placeholder="Nova Senha" type="password" icon={Lock} />
            <Button title="Salvar" />
          </Form>

          <Nav>
            <IconButton title="Meus Pedidos" icon={Receipt} />
            <IconButton title="Meus Favoritos" icon={Heart} />
            <IconButton title="Sair" icon={SignOut} />
          </Nav>
        </Menu>
      </Content>
      <Footer />
    </Container>
  )
}
