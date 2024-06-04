import { Container } from "./styles"
import droppingFoodImg from "../../assets/dropping-food.png"

export function Hero() {
  return (
    <Container>
      <div>
        <img src={droppingFoodImg} alt="Dropping flying food" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <h4>Sinta o cuidado do preparo com ingredientes selecionados.</h4>
        </div>
      </div>
    </Container>
  )
}
