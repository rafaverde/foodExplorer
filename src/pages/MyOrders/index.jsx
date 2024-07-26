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

import { useUI } from "../../hooks/ui"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

export function MyOrders() {
  const { user } = useAuth()

  const [orders, setOrders] = useState([])

  //Status Options
  const customOption = ({ innerProps, label, value }) => (
    <div {...innerProps}>
      <Circle
        size={15}
        weight="fill"
        className={
          label === "Aguardando confirmação"
            ? "pending"
            : label === "Em produção"
            ? "making"
            : "done"
        }
      />
      {label}
    </div>
  )

  const selectOptions = [
    { value: "pending", label: "Aguardando confirmação" },
    { value: "making", label: "Em produção" },
    { value: "done", label: "Pedido Entregue" },
  ]

  //Navigation
  const navigate = useNavigate()
  function handleBackButton() {
    navigate(-1)
  }

  //Fetch Orders
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get(`/orders`)

      setOrders(response.data.orders)
    }

    fetchOrders()
  }, [])

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
        <CategorySection title="Meus pedidos" />
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
                        <SelectInput
                          options={selectOptions}
                          // components={{ Option: customOption }}
                        />
                      </TableColumn>
                    )}
                    <TableColumn style={{ gridArea: "id" }}>
                      {order.id}
                    </TableColumn>
                    {[USER_ROLE.ADMIN].includes(user.role) ? (
                      <TableColumn style={{ gridArea: "user" }}>
                        {user.name}
                      </TableColumn>
                    ) : null}
                    <TableColumn style={{ gridArea: "description" }}>
                      {order.items}
                    </TableColumn>
                    <TableColumn style={{ gridArea: "date" }}>
                      {order.created_at}
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
