import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "content";
`

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - (114px + 77px + 30px));
  padding: 30px 3rem;

  grid-area: content;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.ACCENT};
    width: 200px;
    height: 200px;
  }

  > span {
    font-weight: 700;
    font-size: 6rem;
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }
`
