import { Container, Infos, Counter } from "./styles"

import { Input } from "../../components/Input"
import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"

import { Heart, Minus, Plus, PlusCircle } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

export function PlateCard({ counter, onClickMinus, onClickPlus }) {
  return (
    <Container>
      <IconButton icon={Heart} className="heart-favourite" />

      <img src={plateTemp} alt="" />

      <Infos>
        <h3>Salada Ravanello {">"}</h3>
        <p>Massa fresca com camarões e pesto.</p>
        <span>R$ 47,90</span>
      </Infos>

      <Counter>
        <IconButton icon={Minus} onClick={onClickMinus} />
        <Input value={counter} readOnly />
        <IconButton icon={Plus} onClick={onClickPlus} />
      </Counter>

      <Button title="Adicionar" icon={PlusCircle} className="add-button" />
    </Container>
  )
}
