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
import { CaretCircleLeft, Pencil, PlusCircle } from "@phosphor-icons/react"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Counter } from "../../components/Counter"
import { Button } from "../../components/Button"

import { api } from "../../services/api"
import { USER_ROLE } from "../../utils/roles"
import { useAuth } from "../../hooks/auth"
import { useUI } from "../../hooks/ui"

export function PlateDetail() {
  const { user } = useAuth()
  const { orderItems, setOrderItems } = useUI()

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

  //Add item to order
  // const itemsInsert = {
  //   id: plate.id,
  //   image: plate.image,
  //   name: plate.name,
  //   price: parseFloat(plate.price.replace(",", ".")),
  //   quantity: counterValue,
  // }

  function handleAddPlate() {
    const itemsInsert = {
      id: plate.id,
      image: `${plateImageURL}${plate.image}`,
      name: plate.name,
      price: parseFloat(plate.price.replace(",", ".")),
      quantity: counterValue,
    }

    const index = orderItems.findIndex((existingItem) => {
      return existingItem.id === plate.id
    })

    if (index !== -1) {
      const newQuantity = (orderItems[index].quantity += itemsInsert.quantity)
      const newPrice =
        parseFloat(plate.price.replace(",", ".")).toFixed(2) * newQuantity
      orderItems[index].price = newPrice
      orderItems[index].quantity = newQuantity
    } else {
      setOrderItems([...orderItems, itemsInsert])
    }
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`plates/${params.id}`)
      setPlate(response.data)
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
                {[USER_ROLE.CUSTOMER].includes(user.role)
                  ? (parseFloat(plate.price.replace(",", ".")) * counterValue)
                      .toFixed(2)
                      .replace(".", ",")
                  : parseFloat(plate.price.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ",")}
              </span>

              <ButtonsSection>
                {[USER_ROLE.CUSTOMER].includes(user.role) && (
                  <>
                    <Counter onCounterChange={handleCounterChange} />
                    <Button
                      title="Adicionar"
                      icon={PlusCircle}
                      onClick={handleAddPlate}
                    />
                  </>
                )}
                {[USER_ROLE.ADMIN].includes(user.role) && (
                  <Button
                    title="Editar Prato"
                    icon={Pencil}
                    onClick={() => navigate(`/edit/${plate.id}`)}
                  />
                )}
              </ButtonsSection>
            </Infos>
          </Details>
        </Content>
      )}

      <Footer />
    </Container>
  )
}
