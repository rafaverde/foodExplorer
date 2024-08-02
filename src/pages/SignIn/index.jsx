import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { Container, Form } from "./styles"
import { EnvelopeSimple, Lock } from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"
import darkLogo from "../../assets/food-explorer-dark-logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { useAuth } from "../../hooks/auth"
import { useUI } from "../../hooks/ui"

export function SignIn() {
  const { signIn, loadingUserActions } = useAuth()
  const { isDarkTheme } = useUI()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const ENTER_KEY = 13

  const navigate = useNavigate()
  function handleSignUpButton() {
    navigate("/register")
  }

  function handleSignIn() {
    signIn({ email, password })
  }

  function handleKeyPress(event) {
    if (event.charCode === ENTER_KEY) {
      handleSignIn()
    }
  }

  return (
    <Container>
      <img src={isDarkTheme ? darkLogo : logo} alt="Food Explorer" />

      <Form>
        <h2>Faça seu login</h2>
        <div className="input-wrapper">
          <label id="email">Seu email</label>
          <Input
            icon={EnvelopeSimple}
            type="text"
            placeholder="seuemail@email.com.br"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label id="password">Sua senha</label>
          <Input
            icon={Lock}
            type="password"
            placeholder="Digite sua senha"
            onChange={(event) => setPassword(event.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Button
          title="Entrar"
          onClick={handleSignIn}
          loading={loadingUserActions}
        />
        <ButtonText
          title="Criar uma conta"
          $isactive={true}
          onClick={handleSignUpButton}
        />
      </Form>
    </Container>
  )
}
