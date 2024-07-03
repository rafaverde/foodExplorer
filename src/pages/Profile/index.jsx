import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

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
  BowlSteam,
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
import { api } from "../../services/api"

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [address, setAddress] = useState(user.address)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  let avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/avatar/${user.avatar}`
    : avatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)

  const { toggleThemeMode } = useUI()
  const navigate = useNavigate()

  async function handleUpdate() {
    const userUpdates = {
      name,
      email,
      address,
      password: newPassword,
      old_password: oldPassword,
    }

    const userUpdated = Object.assign(user, userUpdates)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function handleAvatarDelete() {
    setAvatarFile("empty")
    const imagePreview = avatarPlaceHolder
    setAvatar(imagePreview)
    avatarURL = avatarPlaceHolder
  }

  function handleBackButton() {
    navigate(-1)
  }

  function handleNavButton(toWhere) {
    navigate(`/${toWhere}`)
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
              <img src={avatar} alt="User Avatar" />
              <label htmlFor="avatar">
                <Camera />
                <input type="file" id="avatar" onChange={handleChangeAvatar} />
              </label>
              <IconButton
                icon={X}
                className="close-button"
                onClick={handleAvatarDelete}
              />
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
            <IconButton
              title="Novo Prato"
              icon={BowlSteam}
              onClick={() => handleNavButton("new")}
            />
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
