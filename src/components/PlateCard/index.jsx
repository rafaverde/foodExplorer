import { Container, Infos } from "./styles"

import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import { Heart, PlusCircle } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

import { useState } from "react"

export function PlateCard() {
  const [isFavourite, setIsFavourite] = useState(false)
  const price = 47.9
  const [counterValue, setCounterValue] = useState(0)

  function handleFavouriteClick() {
    setIsFavourite((prevState) => !prevState)
  }

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue)
  }

  return (
    <Container>
      <IconButton
        icon={Heart}
        className="heart-favourite"
        isFilled={isFavourite}
        onClick={handleFavouriteClick}
      />

      <img src={plateTemp} alt="" />

      <Infos>
        <h3>Salada Ravanello {">"}</h3>
        <p>Massa fresca com camarões e pesto.</p>
        <span>R$ {(price * counterValue).toFixed(2)}</span>
      </Infos>

      <Counter onCounterChange={handleCounterChange} />

      <Button title="Adicionar" icon={PlusCircle} />
    </Container>
  )
}
