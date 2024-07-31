import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { Container, Infos, Message } from "./styles"

import { IconButton } from "../IconButton"
import { ButtonText } from "../ButtonText"

import { Trash, HeartBreak } from "@phosphor-icons/react"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function FavouriteCard({ id, image, name, favourites }) {
  const { user } = useAuth()

  const navigate = useNavigate()

  const [isFavourite, setIsFavourite] = useState(true)
  const [isActive, setIsActive] = useState(true)

  function handleDetails(id) {
    navigate(`/plate/${id}`)
  }

  async function handleRemoveFavourite() {
    setIsActive(false)
    setTimeout(() => {
      if (favourites.includes(String(id))) {
        favourites.map((element, index) => {
          if (element === String(id)) {
            favourites.splice(index, 1)
          }
        })
      }
      const userUpdates = {
        favourites: String(favourites),
      }

      const userUpdated = { ...user, ...userUpdates }

      api.put("/users", userUpdated)
      localStorage.setItem("@foodexplorer:user", JSON.stringify(userUpdated))
      setIsFavourite(false)
    }, 1000)
  }

  useEffect(() => {
    favourites.map((number) => {
      if (number === String(id)) {
        setIsFavourite(true)
      }
    })
  }, [])

  if (favourites.length > 1 || favourites.length === 0) {
    return (
      <Container
        $isfavourite={isFavourite}
        className={isActive ? "active" : "inactive"}
      >
        <img src={image} alt={name} />

        <Infos>
          <ButtonText
            title={name}
            onClick={() => {
              handleDetails(id)
            }}
          />
        </Infos>
        <IconButton icon={Trash} onClick={handleRemoveFavourite} />
      </Container>
    )
  } else {
    return (
      <Message>
        <HeartBreak size={100} />
        <span>Você não tem nenhum favorito ainda!</span>
        <ButtonText
          title="Navegue em nosso Cardápio e favorite suas delícias preferidas."
          onClick={() => navigate("/")}
        />
      </Message>
    )
  }
}
