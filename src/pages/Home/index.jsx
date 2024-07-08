import { useEffect, useState } from "react"

import { Container, Content } from "./styles"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/skyblue"
import { splideOptions } from "../../utils/splideOptions"

import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { CategorySection } from "../../components/CategorySection"
import { PlateCard } from "../../components/PlateCard"
import { Footer } from "../../components/Footer"

import { api } from "../../services/api"

export function Home() {
  const [categories, setCategories] = useState([])
  const [plates, setPlates] = useState([])
  const plateImageURL = `${api.defaults.baseURL}/files/plates/`

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/categories")
      setCategories(response.data)
    }

    fetchCategories()

    async function fetchPlates() {
      const response = await api.get("/plates?plate_name&ingredients")

      setPlates(response.data)
      console.log(plates)
    }

    fetchPlates()
  }, [])
  return (
    <Container>
      <Header />

      <Content>
        <Hero />
        {categories &&
          categories.map((category) => (
            <div className="category" key={category.id}>
              <CategorySection title={category.name} />
              <Splide aria-label={category.name} options={splideOptions}>
                {plates &&
                  plates
                    .filter((plate) => plate.category_name === category.name)
                    .map((filteredPlate) => (
                      <SplideSlide key={filteredPlate.id}>
                        <PlateCard
                          image={`${plateImageURL}${filteredPlate.image}`}
                          name={filteredPlate.name}
                          description={filteredPlate.description}
                          price={filteredPlate.price}
                        />
                      </SplideSlide>
                    ))}
              </Splide>
            </div>
          ))}
      </Content>

      <Footer />
    </Container>
  )
}
