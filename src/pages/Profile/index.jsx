import { Avatar, Container, Content, Form } from "./styles"
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import {
  Camera,
  CaretCircleLeft,
  Envelope,
  User,
  X,
} from "@phosphor-icons/react"
import { IconButton } from "../../components/IconButton"
import { Input } from "../../components/Input"

export function Profile() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText title="Voltar" icon={CaretCircleLeft} $isactive />

        <Form>
          <Avatar>
            <img src={avatarPlaceHolder} alt="User Avatar" />
            <label htmlFor="avatar">
              <Camera />
              <input type="file" id="avatar" />
            </label>
            <IconButton icon={X} className="close-button" />
          </Avatar>
          <Input placeholder="Nome" type="text" icon={User} />
          <Input placeholder="E-mail" type="text" icon={Envelope} />
          <Input placeholder="Senha Atual" type="password" icon={User} />
          <Input placeholder="Nova Senha" type="password" icon={User} />
          <Button title="Salvar" />
        </Form>
      </Content>
      <Footer />
    </Container>
  )
}
