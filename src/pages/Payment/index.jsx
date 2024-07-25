import { useNavigate } from "react-router-dom"

import { Container, Content, Message, OrderList, Total } from "./styles"
import { CaretCircleLeft, SmileySad } from "@phosphor-icons/react"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { CategorySection } from "../../components/CategorySection"
import { OrderCard } from "../../components/OrderCard"
import { Button } from "../../components/Button"

import { useUI } from "../../hooks/ui"

export function Payment() {
  const { orderItems } = useUI()

  //Order Total
  const orderTotal = orderItems
    .map((item) => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  //Navigation
  const navigate = useNavigate()
  function handleBackButton() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          title="Voltar"
          icon={CaretCircleLeft}
          $isactive
          onClick={handleBackButton}
        />
        <CategorySection title="Revise seu pedido" />
        <OrderList>
          {orderItems
            ? orderItems.map((item) => (
                <li key={item.id}>
                  <OrderCard
                    id={item.id}
                    image={item.image}
                    quantity={item.quantity}
                    name={item.name}
                    price={item.price}
                  />
                </li>
              ))
            : null}
        </OrderList>
        <Total>
          <h3>
            Total R$ <span>{orderTotal.toFixed(2)}</span>
          </h3>
          <Button title="Ir para pagamento" />
        </Total>
        {orderItems.length === 0 ? (
          <Message>
            <SmileySad size={100} />
            <span>Nenhum item no seu pedido!</span>
          </Message>
        ) : null}
      </Content>
      <Footer />
    </Container>
  )
}
