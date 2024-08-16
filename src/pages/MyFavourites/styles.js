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

export const FavouriteList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  .message {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    transition: all 300ms;
    transition-delay: 1000ms;

    > span {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  .active ~ .message {
    opacity: 0;
    height: 0;
    transition-delay: 0ms;
  }
`
