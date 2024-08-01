import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  Container,
  Content,
  OrderTable,
  TableColumn,
  TableLine,
} from "./styles"
import { CaretCircleLeft, Circle } from "@phosphor-icons/react"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { CategorySection } from "../../components/CategorySection"
import { SelectInput } from "../../components/SelectInput"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

export function MyOrders() {
  const { user } = useAuth()

  const [orders, setOrders] = useState([])
  const [iconUpdate, setIconUpdate] = useState(false)

  //Date Format
  function formatDate(date) {
    const [dateString, hourString] = date.split(" ")
    const [year, month, day] = dateString.split("-")
    const [hour, minutes] = hourString.split(":")

    return `${day}/${month} às ${hour}h${minutes}`
  }

  //Status Options
  const selectOptions = [
    { value: "Aguardando confirmação", label: "Aguardando confirmação" },
    { value: "Em produção", label: "Em produção" },
    { value: "Pedido Entregue", label: "Pedido Entregue" },
  ]

  //Navigation
  const navigate = useNavigate()
  function handleBackButton() {
    navigate(-1)
  }

  //Order Update
  async function handleOrderUpdate(id, status) {
    const newStatus = {
      order_status: status,
    }

    await api.put(`/orders/${id}`, newStatus)
    setIconUpdate((prevState) => !prevState)
  }

  //Fetch Orders
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get(`/orders`)

      setOrders(response.data.orders)
    }

    fetchOrders()
  }, [iconUpdate])

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
        <CategorySection
          title={
            [USER_ROLE.CUSTOMER].includes(user.role)
              ? "Meus pedidos"
              : "Pedidos na fila"
          }
        />
        {orders ? (
          <OrderTable>
            <TableLine
              className={[USER_ROLE.ADMIN].includes(user.role) ? "admin" : ""}
            >
              <TableColumn>Status</TableColumn>
              <TableColumn>Código</TableColumn>

              {[USER_ROLE.ADMIN].includes(user.role) ? (
                <TableColumn>Usuário</TableColumn>
              ) : null}

              <TableColumn>Descrição</TableColumn>
              <TableColumn>Data/Hora</TableColumn>
            </TableLine>
            {orders
              ? orders.map((order) => (
                  <TableLine
                    key={order.id}
                    className={
                      [USER_ROLE.ADMIN].includes(user.role) ? "admin" : ""
                    }
                  >
                    {[USER_ROLE.CUSTOMER].includes(user.role) ? (
                      <TableColumn style={{ gridArea: "status" }}>
                        <Circle
                          size={15}
                          weight="fill"
                          className={
                            order.order_status === "Aguardando confirmação"
                              ? "pending"
                              : order.order_status === "Em produção"
                              ? "making"
                              : "done"
                          }
                        />
                        {order.order_status}
                      </TableColumn>
                    ) : (
                      <TableColumn style={{ gridArea: "status" }}>
                        <Circle
                          size={15}
                          weight="fill"
                          className={
                            order.order_status === "Aguardando confirmação"
                              ? "pending"
                              : order.order_status === "Em produção"
                              ? "making"
                              : "done"
                          }
                        />
                        <SelectInput
                          options={selectOptions}
                          defaultValue={{
                            label: order.order_status,
                            value: order.order_status,
                          }}
                          onChange={(e) => handleOrderUpdate(order.id, e.label)}
                        />
                      </TableColumn>
                    )}
                    <TableColumn style={{ gridArea: "id" }}>
                      {order.id}
                    </TableColumn>
                    {[USER_ROLE.ADMIN].includes(user.role) ? (
                      <TableColumn style={{ gridArea: "user" }}>
                        {order.user_id}
                      </TableColumn>
                    ) : null}
                    <TableColumn style={{ gridArea: "description" }}>
                      {order.items}
                    </TableColumn>
                    <TableColumn style={{ gridArea: "date" }}>
                      {formatDate(order.created_at)}
                    </TableColumn>
                  </TableLine>
                ))
              : null}
          </OrderTable>
        ) : null}
      </Content>
      <Footer />
    </Container>
  )
}
