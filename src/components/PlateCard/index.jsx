import { Container, Infos, Counter } from "./styles"

import { Input } from "../../components/Input"
import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"

import { Heart, Minus, Plus, PlusCircle } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

import { useEffect, useState } from "react"

export function PlateCard() {
  const [productCounter, setProductCounter] = useState(0)

  useEffect(() => {
    if (productCounter < 0) {
      setProductCounter(0)
    }
  }, [productCounter])

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
        <IconButton
          icon={Minus}
          onClick={() => {
            setProductCounter(productCounter - 1)
          }}
        />
        <Input value={productCounter} readOnly />
        <IconButton
          icon={Plus}
          onClick={() => {
            setProductCounter(productCounter + 1)
          }}
        />
      </Counter>

      <Button title="Adicionar" icon={PlusCircle} className="add-button" />
    </Container>
  )
}
