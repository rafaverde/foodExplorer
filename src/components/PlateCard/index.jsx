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
  const platePrice = parseFloat(price.replace(",", ".") * counterValue).toFixed(
    2
  )
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
      {[USER_ROLE.CUSTOMER, USER_ROLE.ADMIN].includes(user.role) && (
        <div id="favourite_form">
          <form>
            <div className="checkbox-wrapper">
              <input type="checkbox" id={`${id}${name}`} />
              <label htmlFor={`${id}${name}`}>
                {/* <IconButton
                icon={Heart}
                className="check-favourite"
                isFilled={isFavourite}
                onClick={handleFavouriteClick}
              /> */}
              </label>
            </div>
          </form>
        </div>
      )}

      {[USER_ROLE.ADMIN].includes(user.role) && (
        <IconButton
          icon={Pencil}
          className="edit-plate"
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

      <Counter onCounterChange={handleCounterChange} />

      <Button title="Adicionar" icon={PlusCircle} />
    </Container>
  )
}
