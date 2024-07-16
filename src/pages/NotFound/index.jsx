import { Container, Content } from "./styles"
import { SmileyXEyes } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

import { ButtonText } from "../../components/ButtonText"

export function NotFound() {
  const navigate = useNavigate()

  function handleBackButton() {
    navigate("/")
  }

  return (
    <Container>
      <Content>
        <SmileyXEyes />
        <span>404</span>
        <h2>Algo deu errado!</h2>
        <ButtonText
          title="A página não foi encontrada, clique aqui para retornar"
          onClick={handleBackButton}
        />
      </Content>
    </Container>
  )
}
