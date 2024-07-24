import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Container, Content, FavouriteList } from "./styles"
import { CaretCircleLeft } from "@phosphor-icons/react"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { CategorySection } from "../../components/CategorySection"
import { useState } from "react"

import { useUI } from "../../hooks/ui"
import { FavouriteCard } from "../../components/FavouriteCard"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function MyFavourites() {
  const { search } = useUI()
  const { user } = useAuth()
  const [plates, setPlates] = useState([])
  const plateImageURL = `${api.defaults.baseURL}/files/plates/`

  const [userFavourites, setUserFavourites] = useState([])

  //Navigation
  const navigate = useNavigate()
  function handleBackButton() {
    navigate(-1)
  }

  // Fetch plates
  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(
        `/plates?plate_name=${search}&ingredients=${search}`
      )

      setPlates(response.data)
    }

    fetchPlates()
  }, [search])

  //Fetch Users Favourites
  useEffect(() => {
    async function fetchFavourites() {
      try {
        const actualFavourites = await api.get(`/users/${user.id}`)

        if (actualFavourites !== "") {
          const actualFavouritesArray =
            actualFavourites.data.favourites[0].favourites.split(",")
          setUserFavourites(actualFavouritesArray)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchFavourites()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          title="Voltar"
          icon={CaretCircleLeft}
          $isactive
          onClick={handleBackButton}
        />
        <CategorySection title="Meus favoritos" />
        <FavouriteList>
          {plates &&
            plates
              .filter((plate) => userFavourites.includes(String(plate.id)))
              .map((filteredFavourite) => (
                <FavouriteCard
                  key={filteredFavourite.id}
                  id={filteredFavourite.id}
                  image={`${plateImageURL}${filteredFavourite.image}`}
                  name={filteredFavourite.name}
                  favourites={userFavourites}
                />
              ))}
        </FavouriteList>
      </Content>
      <Footer />
    </Container>
  )
}
