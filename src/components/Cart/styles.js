import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.button`
  position: relative;

  color: ${({ theme }) => theme.COLORS.TEXTS_100};

  > svg {
    width: 3rem;
    height: 3rem;
  }

  > .receipt-counter {
    background-color: ${({ theme }) => theme.COLORS.DARK_RED};

    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: -5px;

    border-radius: 99px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`
