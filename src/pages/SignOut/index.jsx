import { Container, Form } from "./styles"
import { EnvelopeSimple, Lock, User } from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignOut() {
  return (
    <Container>
      <img src={logo} alt="Food Explorer" />

      <Form>
        <h2>Crie sua conta</h2>
        <div className="input-wrapper">
          <label id="email">Seu Nome</label>
          <Input icon={User} type="text" placeholder="Seu nome e sobrenome" />
        </div>
        <div className="input-wrapper">
          <label id="email">Seu email</label>
          <Input
            icon={EnvelopeSimple}
            type="text"
            placeholder="seuemail@email.com.br"
          />
        </div>
        <div className="input-wrapper">
          <label id="password">Sua senha</label>
          <Input icon={Lock} type="password" placeholder="Digite uma senha" />
        </div>
        <div className="input-wrapper">
          <label id="password_confirm">Confirmar senha</label>
          <Input icon={Lock} type="password" placeholder="Digite uma senha" />
        </div>
        <Button title="Criar conta" />
        <ButtonText title="Já tem uma conta? Clique aqui." $isactive={true} />
      </Form>
    </Container>
  )
}
