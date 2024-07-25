import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
`

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - (114px + 77px + 30px));
  padding: 30px 3rem;

  grid-area: content;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 30px;

  > .total {
    text-align: right;
    > h3 > span {
      font-weight: 300;
      text-align: right;
    }
  }
`

export const OrderWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;

  overflow-x: hidden;
  overflow-y: auto;
`

export const OrderReview = styled.div`
  min-width: calc(100vw - 6rem);
  transition: all 1s;

  &.inactive {
    transform: translateX(-100vw);
  }
`

export const OrderList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > li .inactive {
    animation: fadeout 1s 300ms forwards;
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
  margin-top: 12px;

  > button {
    margin-top: 20px;
  }
`

export const Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  > span {
    font-size: 1.2rem;
    text-align: center;
  }
`

export const OrderPayment = styled.div`
  min-width: calc(100vw - 6rem);
  transition: all 1s;

  &.active {
    transform: translateX(calc(-100vw + 3rem));
  }
`
