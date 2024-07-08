import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import {
  ButtonsSection,
  Container,
  Content,
  Details,
  Infos,
  TagsSection,
} from "./styles"
import { CaretCircleLeft, PlusCircle } from "@phosphor-icons/react"
import plateTemp from "../../assets/plates/plate-gambe.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

export function PlateDetail() {
  const [plate, setPlate] = useState(null)
  const params = useParams()

  const [counterValue, setCounterValue] = useState(0)
  const plateImageURL = `${api.defaults.baseURL}/files/plates/`

  const navigate = useNavigate()

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue)
  }

  function handleBackButton() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`plates/${params.id}`)
      setPlate(response.data)
      console.log(response.data)
    }

    fetchPlate()
  }, [])

  return (
    <Container>
      <Header />

      {plate && (
        <Content>
          <ButtonText
            title="Voltar"
            icon={CaretCircleLeft}
            $isactive
            onClick={handleBackButton}
          />
          <Details>
            <img src={`${plateImageURL}${plate.image}`} alt="" />
            <Infos>
              <h3>{plate.name}</h3>
              <p>{plate.description}</p>

              {plate.ingredients && (
                <TagsSection>
                  {plate.ingredients.map((ingredient) => (
                    <Tag key={String(ingredient.id)} title={ingredient.name} />
                  ))}
                </TagsSection>
              )}

              <span>
                R${" "}
                {(parseFloat(plate.price.replace(",", ".")) * counterValue)
                  .toFixed(2)
                  .replace(".", ",")}
              </span>

              <ButtonsSection>
                <Counter onCounterChange={handleCounterChange} />
                <Button title="Adicionar" icon={PlusCircle} />
              </ButtonsSection>
            </Infos>
          </Details>
        </Content>
      )}

      <Footer />
    </Container>
  )
}
