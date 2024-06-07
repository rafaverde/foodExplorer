import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.TEXTS_100};
    font-size: 2rem;
  }
`
