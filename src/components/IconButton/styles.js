import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 1.3rem;

  color: ${({ theme }) => theme.COLORS.TEXTS_100};

  > svg {
    color: ${({ theme }) => theme.COLORS.TEXTS_100};
    font-size: 2rem;
  }
`
