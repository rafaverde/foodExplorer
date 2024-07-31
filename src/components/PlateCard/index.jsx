import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { Container, Infos, FavouriteForm, HeartCheckBox } from "./styles"

import { IconButton } from "../../components/IconButton"
import { Button } from "../../components/Button"
import { Counter } from "../../components/Counter"

import { Pencil, PlusCircle } from "@phosphor-icons/react"

import { ButtonText } from "../ButtonText"

import { useAuth } from "../../hooks/auth"
import { useUI } from "../../hooks/ui"
import { api } from "../../services/api"
import { USER_ROLE } from "../../utils/roles"

export function PlateCard({ id, image, name, description, price, favourites }) {
  const { user } = useAuth()
  const { orderItems, setOrderItems } = useUI()
  const [isFavourite, setIsFavourite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

    await api.put("/users", userUpdated)
    localStorage.setItem("@foodexplorer:user", JSON.stringify(userUpdated))
  }

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue)
  }

  //Add item to order
  const itemsInsert = {
    id,
    image,
    name,
    price: parseFloat(parseFloat(platePrice).toFixed(2)),
    quantity: counterValue,
  }

  function handleAddPlate(plate) {
    setIsLoading(true)
    const index = orderItems.findIndex((existingItem) => {
      return existingItem.id === plate.id
    })

    if (index !== -1) {
      const newQuantity = (orderItems[index].quantity += plate.quantity)
      const newPrice =
        parseFloat(price.replace(",", ".")).toFixed(2) * newQuantity
      orderItems[index].price = newPrice
      orderItems[index].quantity = newQuantity
    } else {
      setOrderItems([...orderItems, plate])
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 700)
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
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
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
          <Button
            title="Adicionar"
            icon={PlusCircle}
            onClick={() => handleAddPlate(itemsInsert)}
            loading={isLoading}
          />
        </>
      )}
    </Container>
  )
}
