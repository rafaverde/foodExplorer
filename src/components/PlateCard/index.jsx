import { Container, Infos, Counter } from "./styles"

import { Input } from "../../components/Input"
import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"

import { Heart, Minus, Plus, PlusCircle } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

import { useEffect, useState } from "react"

export function PlateCard() {
  const [productCounter, setProductCounter] = useState(0)
  const [disableButton, setDisableButton] = useState(true)
  const [isFavourite, setIsFavourite] = useState(false)

  function handleFavouriteClick() {
    if (isFavourite) {
      setIsFavourite(false)
    } else {
      setIsFavourite(true)
    }
  }

  useEffect(() => {
    if (productCounter <= 0) {
      setProductCounter(0)
      setDisableButton(true)
    }

    if (productCounter > 0) {
      setDisableButton(false)
    }
  }, [productCounter])

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

      <Counter>
        <IconButton
          icon={Minus}
          onClick={() => {
            setProductCounter(productCounter - 1)
          }}
          disabled={disableButton}
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
