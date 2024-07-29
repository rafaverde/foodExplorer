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
  PaymentFlow,
  PaymentWrapper,
} from "./styles"
import {
  BowlSteam,
  CaretCircleLeft,
  CheckCircle,
  Clock,
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
import { Input } from "../../components/Input"

import { useUI } from "../../hooks/ui"
import { useAuth } from "../../hooks/auth"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function Payment() {
  const { orderItems, setOrderItems } = useUI()
  const { user } = useAuth()

  //Navigation
  const navigate = useNavigate()
  function handleBackButton() {
    navigate(-1)
  }

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

  //Handle Payment
  const [toggleOrderPayment, setToggleOrderPayment] = useState("review")
  const [toggleFlowIcon, setFlowIconFlow] = useState("processing")

  //Handle Orders
  async function createOrder(items) {
    try {
      await api.post("/orders", items)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
      } else {
        alert("Não foi possível criar o pedido. Tente novamente mais tarde.")
        console.log(error)
      }
    }
  }

  async function updateOrder(status) {
    const orders = await api.get("/orders")

    const lastOrder = orders.data.orders[0].id

    try {
      await api.put(`/orders/${String(lastOrder)}`, status)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
      } else {
        alert(
          "Não foi possível atualizar o status o pedido. Tente novamente mais tarde."
        )
        console.log(error)
      }
    }
  }

  function handlePayment() {
    const paymentMessage = document.getElementById("paymentMessage")

    if (orderItems.length === 0) {
      return alert(
        "Seu pedido está vazio! :( Insira itens do nosso cardápio e tente novamente."
      )
    }

    const orderItemsArray = orderItems.map(
      (item) => `${item.quantity}x ${item.name} R$ ${item.price.toFixed(2)}`
    )

    const orderItemsInsert = {
      items: orderItemsArray,
    }
    setToggleOrderPayment("payment")

    createOrder(orderItemsInsert).then(() => {
      setTimeout(() => {
        setFlowIconFlow("aproved")
        paymentMessage.innerHTML = "Pagamento aprovado!"
        const status = {
          payment_status: "Pagamento aprovado",
        }

        updateOrder(status).then(() => {
          const status = {
            order_status: "Em produção",
          }
          updateOrder(status).then(() => {
            setFlowIconFlow("done")
            paymentMessage.innerHTML =
              "Pedido em preparo, em breve chegará em sua casa!"
            setOrderItems([])

            setTimeout(() => {
              navigate("/")
            }, 3000)
          })
        })
      }, 2000)
    })
  }

  function handleAddOrderItem(id) {
    const itemUpdated = orderItems.find((item) => {
      if (item.id === id) {
        const itemPrice = item.price / item.quantity
        item.quantity += 1
        item.price += itemPrice

        return item
      }
    })

    const index = orderItems.findIndex((item) => item.id === id)
    const orderUpdated = orderItems
    if (index !== -1) {
      orderUpdated[index] = itemUpdated
    }

    setOrderItems(orderUpdated)
    setOrderItems([...orderItems])
  }

  function handleRemoveOrderItem(id) {
    const itemUpdated = orderItems.find((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          const itemPrice = item.price / item.quantity
          item.quantity -= 1
          item.price -= itemPrice
          return item
        } else {
          return item
        }
      }
    })

    const index = orderItems.findIndex((item) => item.id === id)
    const orderUpdated = orderItems
    if (index !== -1) {
      orderUpdated[index] = itemUpdated
    }

    setOrderItems(orderUpdated)
    setOrderItems([...orderItems])
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
        <OrderWrapper
          className={toggleOrderPayment === "review" ? "active" : "inactive"}
        >
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
                        addItem={() => handleAddOrderItem(item.id)}
                        removeItem={() => handleRemoveOrderItem(item.id)}
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

                <Button title="Efetuar pedido" onClick={handlePayment} />
              </TabOutput>
            </PaymentDialog>
            <Button
              title="Revisar Pedido"
              icon={CaretCircleLeft}
              onClick={handleToggleReview}
            />
          </OrderPayment>
        </OrderWrapper>
        <PaymentWrapper
          className={toggleOrderPayment === "payment" ? "active" : "inactive"}
        >
          <PaymentFlow>
            <div id="paymentIcon">
              <Clock
                size={100}
                className={
                  toggleFlowIcon === "processing" ? "active" : "inactive"
                }
              />
              <CheckCircle
                size={100}
                color="lightgreen"
                className={toggleFlowIcon === "aproved" ? "active" : "inactive"}
              />
              <BowlSteam
                size={100}
                className={toggleFlowIcon === "done" ? "active" : "inactive"}
              />
            </div>
            <span id="paymentMessage">O Pagamento está sendo processado.</span>
          </PaymentFlow>
        </PaymentWrapper>
      </Content>
      <Footer />
    </Container>
  )
}
