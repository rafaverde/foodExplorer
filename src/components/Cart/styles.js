import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.button`
  position: relative;

  color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};

  > svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.COLORS.TEXTS_300};
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
