import { useState } from "react"
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
  House,
} from "@phosphor-icons/react"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input"
import { SwitchButton } from "../../components/SwitchButton"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [address, setAddress] = useState(user.address)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  const { toggleThemeMode } = useUI()
  const navigate = useNavigate()

  async function handleUpdate() {
    const user = {
      name,
      email,
      address,
      password: newPassword,
      old_password: oldPassword,
    }

    await updateProfile({ user })
  }

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
            <Input
              placeholder="Nome"
              type="text"
              icon={User}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="E-mail"
              type="text"
              icon={Envelope}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Atualize seu endereço!"
              type="text"
              icon={House}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              placeholder="Senha Atual"
              type="password"
              icon={Lock}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              placeholder="Nova Senha"
              type="password"
              icon={Lock}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Button title="Salvar" onClick={handleUpdate} />
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
