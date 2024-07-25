import { useNavigate } from "react-router-dom"

import {
  Container,
  Content,
  Message,
  OrderList,
  OrderPayment,
  OrderReview,
  OrderWrapper,
  Total,
} from "./styles"
import { CaretCircleLeft, SmileySad } from "@phosphor-icons/react"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { CategorySection } from "../../components/CategorySection"
import { OrderCard } from "../../components/OrderCard"
import { Button } from "../../components/Button"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function Payment() {
  const { orderItems } = useUI()
  const { user } = useAuth()

  //Interface Controle
  const [toggleReview, setToggleReview] = useState(true)

  function handleToggleReview() {
    setToggleReview((prevState) => !prevState)
  }

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
        <OrderWrapper>
          <OrderReview className={toggleReview ? "active" : "inactive"}>
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
            {orderItems.length > 0 ? (
              <Total>
                <h3>
                  Total R${" "}
                  <span>{orderTotal.toFixed(2).replace(".", ",")}</span>
                </h3>
                {user.address ? (
                  <p>
                    <b>Entregar em:</b>
                    {user.address}
                  </p>
                ) : (
                  <>
                    <p>
                      <b>Entregar em: </b>
                      {user.address}
                    </p>
                    <ButtonText
                      title="Atualize seu endereço no perfil!"
                      onClick={() => navigate("/profile")}
                    />
                  </>
                )}
                <p>
                  <b>Pedido por:</b> {user.name}
                </p>
                <Button
                  title="Ir para pagamento"
                  onClick={handleToggleReview}
                />
              </Total>
            ) : null}
            {orderItems.length === 0 ? (
              <Message>
                <SmileySad size={100} />
                <span>Nenhum item no seu pedido!</span>
              </Message>
            ) : null}
          </OrderReview>
          <OrderPayment className={toggleReview ? "inactive" : "active"}>
            <CategorySection title="Pagamento" />
            <Button
              title="Revisar Pedido"
              icon={CaretCircleLeft}
              onClick={handleToggleReview}
            />
          </OrderPayment>
        </OrderWrapper>
      </Content>
      <Footer />
    </Container>
  )
}
