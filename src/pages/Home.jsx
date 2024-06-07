import { Container, Content } from "./styles"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/skyblue"
import { splideOptions } from "../utils/splideOptions"

import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { CategorySection } from "../components/CategorySection"
import { PlateCard } from "../components/PlateCard"
import { Footer } from "../components/Footer"

import { useState } from "react"

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
          <Splide aria-label="Refeições" options={splideOptions}>
            <SplideSlide>
              <PlateCard
                counter={productCounter}
                onClickMinus={() => handleCounterClick("minus")}
                onClickPlus={() => handleCounterClick("plus")}
              />
            </SplideSlide>
            <SplideSlide>
              <PlateCard
                counter={productCounter}
                onClickMinus={() => handleCounterClick("minus")}
                onClickPlus={() => handleCounterClick("plus")}
              />
            </SplideSlide>
            <SplideSlide>
              <PlateCard
                counter={productCounter}
                onClickMinus={() => handleCounterClick("minus")}
                onClickPlus={() => handleCounterClick("plus")}
              />
            </SplideSlide>
            <SplideSlide>
              <PlateCard
                counter={productCounter}
                onClickMinus={() => handleCounterClick("minus")}
                onClickPlus={() => handleCounterClick("plus")}
              />
            </SplideSlide>
          </Splide>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
