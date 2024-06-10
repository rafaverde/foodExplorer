import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 77px;
  padding: 20px 3rem;
  margin-top: 30px;

  grid-area: footer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.TEXTS_500};

  > span {
    font-size: 0.8rem;
  }
`
