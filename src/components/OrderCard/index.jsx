import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Minus, Plus, Trash } from "@phosphor-icons/react"

import { Container, Controls, Infos } from "./styles"

import { IconButton } from "../IconButton"

import { useUI } from "../../hooks/ui"

export function OrderCard({
  id,
  image,
  quantity,
  name,
  price,
  addItem,
  removeItem,
}) {
  const { orderItems, setOrderItems } = useUI()
  const [isActive, setIsActive] = useState(true)

  const [platePrice, setPlatePrice] = useState(parseFloat(price).toFixed(2))

  function handleRemoveOrderItem(toRemove) {
    setIsActive(false)
    setTimeout(
      () =>
        setOrderItems((prevState) =>
          prevState.filter((item) => item.id !== toRemove)
        ),
      1100
    )
  }

  useEffect(() => {
    setPlatePrice(parseFloat(price).toFixed(2))
  }, [orderItems])

  return (
    <Container className={isActive ? "" : "inactive"}>
      <img src={image} alt={name} />

      <Infos>
        <span>{quantity}x</span>
        <h3>{name}</h3>
        <span>R$ {platePrice.replace(".", ",")}</span>
      </Infos>
      <Controls>
        <IconButton icon={Plus} onClick={addItem} />
        <IconButton
          icon={Trash}
          className="trash"
          onClick={() => handleRemoveOrderItem(id)}
        />
        <IconButton icon={Minus} onClick={removeItem} />
      </Controls>
    </Container>
  )
}
