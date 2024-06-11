import { Container } from "./styles"
import { useState, useEffect } from "react"

import { Minus, Plus } from "@phosphor-icons/react"

import { Input } from "../../components/Input"
import { IconButton } from "../../components/IconButton"

export function Counter() {
  const [productCounter, setProductCounter] = useState(0)
  const [disableButton, setDisableButton] = useState(true)

  useEffect(() => {
    if (productCounter <= 0) {
      setProductCounter(0)
      setDisableButton(true)
    }

    if (productCounter > 0) {
      setDisableButton(false)
    }
  }, [productCounter])

  return (
    <Container>
      <IconButton
        icon={Minus}
        onClick={() => {
          setProductCounter(productCounter - 1)
        }}
        disabled={disableButton}
      />
      <Input value={productCounter} readOnly />
      <IconButton
        icon={Plus}
        onClick={() => {
          setProductCounter(productCounter + 1)
        }}
      />
    </Container>
  )
}
