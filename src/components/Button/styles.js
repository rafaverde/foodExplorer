import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  background-color: ${({ theme, $isdark }) =>
    $isdark === true ? theme.COLORS.BACKGROUND_100 : theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};

  font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
  font-size: 1.4rem;
  font-weight: 500;

  height: 56px;
  padding: 0 16px;

  border: 0;
  border-radius: 0.7rem;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.85;
  }

  > svg {
    font-size: 1.6rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1rem;
  }
`
