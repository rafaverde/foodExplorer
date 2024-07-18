import { useNavigate } from "react-router-dom"

import { Container, Infos } from "./styles"

import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import { Heart, Pencil, PlusCircle } from "@phosphor-icons/react"

import { useState } from "react"
import { ButtonText } from "../ButtonText"

import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

export function PlateCard({ id, image, name, description, price }) {
  const { user } = useAuth()
  const [isFavourite, setIsFavourite] = useState(false)
  const [counterValue, setCounterValue] = useState(0)
  const platePrice = [USER_ROLE.ADMIN].includes(user.role)
    ? parseFloat(price.replace(",", ".")).toFixed(2)
    : parseFloat(price.replace(",", ".") * counterValue).toFixed(2)

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/plate/${id}`)
  }

  function handleEditPlate() {
    navigate(`/edit/${id}`)
  }

  function handleFavouriteClick() {
    setIsFavourite((prevState) => !prevState)
  }

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue)
  }

  return (
    <Container>
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <IconButton
          icon={Heart}
          className="heart-favourite"
          isFilled={isFavourite}
          onClick={handleFavouriteClick}
        />
      )}

      {[USER_ROLE.ADMIN].includes(user.role) && (
        <IconButton
          icon={Pencil}
          className="heart-favourite"
          isFilled={isFavourite}
          onClick={handleEditPlate}
        />
      )}

      <img src={image} alt={name} />

      <Infos>
        <ButtonText
          title={name}
          onClick={() => {
            handleDetails(id)
          }}
        />
        <p>{description}</p>
        <span>R$ {platePrice.replace(".", ",")}</span>
      </Infos>

      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          <Counter onCounterChange={handleCounterChange} />
          <Button title="Adicionar" icon={PlusCircle} />
        </>
      )}
    </Container>
  )
}
