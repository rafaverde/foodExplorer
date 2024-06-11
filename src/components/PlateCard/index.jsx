import { Container, Infos } from "./styles"

import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import { Heart, PlusCircle } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

import { useState } from "react"

export function PlateCard() {
  const [isFavourite, setIsFavourite] = useState(false)

  function handleFavouriteClick() {
    if (isFavourite) {
      setIsFavourite(false)
    } else {
      setIsFavourite(true)
    }
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
        <span>R$ 47,90</span>
      </Infos>

      <Counter />

      <Button title="Adicionar" icon={PlusCircle} />
    </Container>
  )
}
