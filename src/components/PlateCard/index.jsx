import { Container, Infos } from "./styles"

import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import { Heart, PlusCircle } from "@phosphor-icons/react"
// import plateTemp from "../../assets/plates/plate-gambe.png"

import { useState } from "react"

export function PlateCard({ image, name, description, price }) {
  const [isFavourite, setIsFavourite] = useState(false)
  const [counterValue, setCounterValue] = useState(0)
  const platePrice = parseFloat(price.replace(",", ".") * counterValue).toFixed(
    2
  )

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

      <img src={image} alt="" />

      <Infos>
        <h3>
          {name} {">"}
        </h3>
        <p>{description}</p>
        <span>R$ {platePrice.replace(".", ",")}</span>
      </Infos>

      <Counter onCounterChange={handleCounterChange} />

      <Button title="Adicionar" icon={PlusCircle} />
    </Container>
  )
}
