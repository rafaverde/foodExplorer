import {
  ButtonsSection,
  Container,
  Content,
  Details,
  Infos,
  TagsSection,
} from "./styles"
import { CaretCircleLeft, PlusCircle } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

import { useState } from "react"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/Button"

export function PlateDetail() {
  const price = 47.9
  const [counterValue, setCounterValue] = useState(0)

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue)
  }

  return (
    <Container>
      <Header />

      <Content>
        <ButtonText title="Voltar" icon={CaretCircleLeft} $isactive />
        <Details>
          <img src={plateTemp} alt="" />
          <Infos>
            <h3>Salada Ravanello {">"}</h3>
            <p>Massa fresca com camarões e pesto.</p>

            <TagsSection>
              <Tag title="alface" />
              <Tag title="tomate" />
              <Tag title="camarão" />
              <Tag title="spaghetti" />
              <Tag title="molho pesto" />
            </TagsSection>

            <span>R$ {(price * counterValue).toFixed(2)}</span>

            <ButtonsSection>
              <Counter onCounterChange={handleCounterChange} />
              <Button title="Adicionar" icon={PlusCircle} />
            </ButtonsSection>
          </Infos>
        </Details>
      </Content>

      <Footer />
    </Container>
  )
}
