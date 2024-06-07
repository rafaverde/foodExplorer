import { Container, Content } from "./styles"
import { Plus } from "@phosphor-icons/react"

import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { CategorySection } from "../components/CategorySection"
import { PlateCard } from "../components/PlateCard"

import { useState } from "react"
import { Footer } from "../components/Footer"

export function Home() {
  const [productCounter, setProductCounter] = useState(0)

  function handleCounterClick(operation) {
    if (operation === "minus") {
      if (productCounter > 0) {
        setProductCounter(productCounter - 1)
      }
    } else {
      setProductCounter(productCounter + 1)
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Hero />
        <div className="category">
          <CategorySection title="Refeições" />
          <PlateCard
            counter={productCounter}
            onClickMinus={() => handleCounterClick("minus")}
            onClickPlus={() => handleCounterClick("plus")}
          />
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
