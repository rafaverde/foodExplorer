import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  .category {
    padding: 15px 3rem;
  }
`

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - (114px + 77px + 30px));

  grid-area: content;
  overflow-y: auto;
`
