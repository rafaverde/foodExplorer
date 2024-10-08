import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Container, Form } from "./styles"
import { EnvelopeSimple, Lock, User } from "@phosphor-icons/react"
import logo from "../../assets/food-explorer-logo.svg"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  function handlBackButton() {
    navigate("/")
  }

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    if (password !== confirmPassword) {
      return alert("As senhas não conferem! Confirme a senha novamente.")
    }

    if (password.length < 8 || confirmPassword.length < 8) {
      return alert("As senhas precisam ter pelo menos 8 caracteres.")
    }

    setIsLoading(true)

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        setIsLoading(false)
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível efetuar o cadastro!")
        }
        setIsLoading(false)
      })
  }

  return (
    <Container>
      <img src={logo} alt="Food Explorer" />

      <Form>
        <h2>Crie sua conta</h2>
        <div className="input-wrapper">
          <label id="email">Seu Nome</label>
          <Input
            icon={User}
            type="text"
            placeholder="Seu nome e sobrenome"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
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
            placeholder="Digite uma senha"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label id="password_confirm">Confirmar senha</label>
          <Input
            icon={Lock}
            type="password"
            placeholder="Digite uma senha"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <Button
          title="Criar conta"
          onClick={handleSignUp}
          loading={isLoading}
        />
        <ButtonText
          title="Já tem uma conta? Clique aqui."
          $isactive={true}
          onClick={handlBackButton}
        />
      </Form>
    </Container>
  )
}
