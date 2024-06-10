import { Container, Content } from "./styles"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/skyblue"
import { splideOptions } from "../utils/splideOptions"

import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { CategorySection } from "../components/CategorySection"
import { PlateCard } from "../components/PlateCard"
import { Footer } from "../components/Footer"
import { SideMenu } from "../components/SideMenu"
import { useState } from "react"

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Content>
        <Hero />
        <div className="category">
          <CategorySection title="Refeições" />
          <Splide aria-label="Refeições" options={splideOptions}>
            <SplideSlide>
              <PlateCard />
            </SplideSlide>
            <SplideSlide>
              <PlateCard />
            </SplideSlide>
            <SplideSlide>
              <PlateCard />
            </SplideSlide>
            <SplideSlide>
              <PlateCard />
            </SplideSlide>
          </Splide>
        </div>
      </Content>

      <Footer />
    </Container>
  )
}
