import { Container, Form } from "./styles"
import { EnvelopeSimple, Lock } from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const data = useAuth()
  console.log("My context >>> ", data)

  return (
    <Container>
      <img src={logo} alt="Food Explorer" />

      <Form>
        <h2>Faça seu login</h2>
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
          <Input
            icon={Lock}
            type="password"
            placeholder="seuemail@email.com.br"
          />
        </div>
        <Button title="Entrar" />
        <ButtonText title="Criar uma conta" $isactive={true} />
      </Form>
    </Container>
  )
}
