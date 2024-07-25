import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

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
  padding: 30px 3rem 0;

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

//Order Review
export const OrderReview = styled.div`
  min-width: calc(100vw - 6rem);
  transition: all 1s;

  &.inactive {
    transform: translateX(-100vw);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    min-width: calc(50% - 1.5rem);
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

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
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

//Order Payment
export const OrderPayment = styled.div`
  min-width: calc(100vw - 6rem);
  transition: all 1s;

  &.active {
    transform: translateX(calc(-100vw + 3rem));
    height: auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    min-width: calc(50% - 1.5rem);

    > button {
      display: none;
    }
  }
`

export const PaymentDialog = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

export const Tabs = styled.div`
  width: 50%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  cursor: pointer;

  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
  transition: all 500ms;

  &.left-tab {
    border-radius: 0.7rem 0 0 0;
  }
  &.right-tab {
    border-radius: 0 0.7rem 0 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  > p {
    font-weight: bold;
    font-size: 1.1rem;
  }
`

export const TabOutput = styled.div`
  min-width: 100%;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0 0 0.7rem 0.7rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};

  > button {
    margin-top: 20px;
  }
`

export const PixTab = styled.div`
  text-align: center;

  > img {
    width: 50%;
  }

  &.active {
    opacity: 1;
    transition: all 1s;
  }

  &.inactive {
    opacity: 0;
    width: 0;
  }
`

export const CardTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &.inactive > h2 + form {
    display: none;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 1.1rem;
  }

  .input-wrapper div {
    margin-top: 8px;
  }

  > form .col-2 {
    display: flex;
    gap: 12px;
  }

  &.active {
    opacity: 1;
    transition: opacity 1s;
  }

  &.inactive {
    opacity: 0;
    width: 0;
    height: 0;
  }
`
