import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { Container, Infos, FavouriteForm, HeartCheckBox } from "./styles"

import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import { Pencil, PlusCircle } from "@phosphor-icons/react"

import { ButtonText } from "../ButtonText"

import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

export function PlateCard({ id, image, name, description, price, favourites }) {
  const { user, updateUserFavourites } = useAuth()
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

  async function handleFavouriteClick() {
    if (favourites.includes(String(id))) {
      favourites.map((element, index) => {
        if (element === String(id)) {
          favourites.splice(index, 1)
        }
      })
    } else {
      favourites.push(String(id))
    }

    const userUpdates = {
      favourites: String(favourites),
    }

    const userUpdated = { ...user, ...userUpdates }

    await updateUserFavourites({ user: userUpdated })
  }

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue)
  }

  useEffect(() => {
    favourites.map((number) => {
      if (number === String(id)) {
        setIsFavourite(true)
      }
    })
  }, [])

  return (
    <Container>
      {[USER_ROLE.CUSTOMER, USER_ROLE.ADMIN].includes(user.role) && (
        <FavouriteForm>
          <HeartCheckBox>
            <input
              type="checkbox"
              id={`${id}${name}`}
              checked={isFavourite}
              onChange={(e) => {
                setIsFavourite(e.target.checked)
              }}
              onClick={handleFavouriteClick}
            />
            <label htmlFor={`${id}${name}`}></label>
          </HeartCheckBox>
        </FavouriteForm>
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

      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          <Counter onCounterChange={handleCounterChange} />
          <Button title="Adicionar" icon={PlusCircle} />
        </>
      )}
    </Container>
  )
}
