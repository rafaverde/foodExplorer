import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Trash } from "@phosphor-icons/react"

import { Container, Infos } from "./styles"

import { IconButton } from "../IconButton"

import { useUI } from "../../hooks/ui"

export function OrderCard({ id, image, quantity, name, price }) {
  const { setOrderItems } = useUI()
  const [isActive, setIsActive] = useState(true)

  const platePrice = parseFloat(price).toFixed(2)

  function handleRemoveOrderItem(toRemove) {
    setIsActive(false)
    setTimeout(
      () =>
        setOrderItems((prevState) =>
          prevState.filter((item, index) => item.id !== toRemove)
        ),
      1100
    )
  }

  return (
    <Container className={isActive ? "" : "inactive"}>
      <img src={image} alt={name} />

      <Infos>
        <span>{quantity}x</span>
        <h3>{name}</h3>
        <span>R$ {platePrice.replace(".", ",")}</span>
      </Infos>
      <IconButton icon={Trash} onClick={() => handleRemoveOrderItem(id)} />
    </Container>
  )
}
