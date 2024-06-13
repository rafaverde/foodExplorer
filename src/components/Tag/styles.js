import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.span`
  font-size: 1.4rem;

  padding: 10px 20px;

  border-radius: 0.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.TEXTS_300};

  text-transform: lowercase;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 0.9rem;
  }
`
