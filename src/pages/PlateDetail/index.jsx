import { Container, Content } from "./styles"
import { CaretCircleLeft } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"

export function PlateDetail() {
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText title="Voltar" icon={CaretCircleLeft} $isactive />
      </Content>

      <Footer />
    </Container>
  )
}
