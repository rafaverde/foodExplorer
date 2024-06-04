import { Container } from "./styles"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"

export function Home() {
  return (
    <Container>
      <Header />

      <Hero />
    </Container>
  )
}
