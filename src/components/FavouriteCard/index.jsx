import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { Container, Infos } from "./styles"

import { IconButton } from "../IconButton"
import { ButtonText } from "../ButtonText"

import { Trash } from "@phosphor-icons/react"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function FavouriteCard({ id, image, name, favourites }) {
  const { user } = useAuth()

  const navigate = useNavigate()

  const [isFavourite, setIsFavourite] = useState(true)

  function handleDetails(id) {
    navigate(`/plate/${id}`)
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
    setIsFavourite(false)
  }

  useEffect(() => {
    favourites.map((number) => {
      if (number === String(id)) {
        setIsFavourite(true)
      }
    })
  }, [])

  return (
    <Container $isfavourite={isFavourite}>
      <img src={image} alt={name} />

      <Infos>
        <ButtonText
          title={name}
          onClick={() => {
            handleDetails(id)
          }}
        />
      </Infos>
      <IconButton icon={Trash} onClick={handleFavouriteClick} />
    </Container>
  )
}
