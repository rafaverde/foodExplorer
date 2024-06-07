import { Container } from "./styles"
import droppingFoodImg from "../../assets/dropping-food.png"

export function Hero() {
  return (
    <Container>
      <div>
        <div id="hero_gradient"></div>
        <img src={droppingFoodImg} alt="Dropping flying food" />
        <div id="hero_info">
          <h2>Sabores inigualáveis</h2>
          <h4>Sinta o cuidado do preparo com ingredientes selecionados.</h4>
        </div>
      </div>
    </Container>
  )
}
