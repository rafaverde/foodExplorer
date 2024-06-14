import styled from "styled-components"

export const Container = styled.button`
  background: none;
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme, $isactive }) =>
    $isactive === true ? theme.COLORS.TEXTS_300 : theme.COLORS.TEXTS_500};

  border: none;

  font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    opacity: 0.85;
  }

  > svg {
    font-size: 2rem;
  }
`
