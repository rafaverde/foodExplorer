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
