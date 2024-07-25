import { useNavigate } from "react-router-dom"

import {
  Container,
  Content,
  Message,
  OrderList,
  OrderPayment,
  OrderReview,
  OrderWrapper,
  Tabs,
  Total,
  PaymentDialog,
  TabOutput,
  PixTab,
  CardTab,
} from "./styles"
import {
  CaretCircleLeft,
  CreditCard,
  PixLogo,
  SmileySad,
} from "@phosphor-icons/react"

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { CategorySection } from "../../components/CategorySection"
import { OrderCard } from "../../components/OrderCard"
import { Button } from "../../components/Button"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import { Input } from "../../components/Input"

export function Payment() {
  const { orderItems } = useUI()
  const { user } = useAuth()

  //Interface Control
  const [toggleReview, setToggleReview] = useState(true)
  function handleToggleReview() {
    setToggleReview((prevState) => !prevState)
  }

  const [toggleOutput, setToggleOutput] = useState("pix")
  function handleToggleOutput(value) {
    setToggleOutput(value)
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
                <ButtonText
                  title="Navegue em nosso Cardápio!"
                  onClick={() => navigate("/")}
                />
              </Message>
            ) : null}
          </OrderReview>
          <OrderPayment className={toggleReview ? "inactive" : "active"}>
            <CategorySection title="Pagamento" />
            <PaymentDialog>
              <Tabs
                className="left-tab"
                onClick={() => handleToggleOutput("pix")}
              >
                <PixLogo size={26} />
                <p>PIX</p>
              </Tabs>
              <Tabs
                className="right-tab"
                onClick={() => handleToggleOutput("card")}
              >
                <CreditCard size={26} />
                <p>Cartão</p>
              </Tabs>
              <TabOutput>
                <PixTab
                  className={toggleOutput === "pix" ? "active" : "inactive"}
                >
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=https%3A%2F%2Fgithub.com%2Frafaverde&amp;qzone=1&amp;margin=0&amp;ecc=L"
                    alt="qr code"
                  />
                </PixTab>
                <CardTab
                  className={toggleOutput === "card" ? "active" : "inactive"}
                >
                  <h2>Dados do Cartão</h2>
                  <form>
                    <div className="input-wrapper">
                      <label htmlFor="cardNumber">Número do Cartão</label>
                      <Input
                        type="text"
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        readOnly
                      />
                    </div>
                    <div className="col-2">
                      <div className="input-wrapper">
                        <label htmlFor="cardDate">Vencimento</label>
                        <Input
                          type="text"
                          id="cardDate"
                          placeholder="00/00"
                          readOnly
                        />
                      </div>
                      <div className="input-wrapper">
                        <label htmlFor="cardCVC">CVC</label>
                        <Input
                          type="text"
                          id="cardCVC"
                          placeholder="000"
                          readOnly
                        />
                      </div>
                    </div>
                  </form>
                </CardTab>

                <Button title="Simular pagamento" />
              </TabOutput>
            </PaymentDialog>
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
