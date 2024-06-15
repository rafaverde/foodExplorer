import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.TEXTS_100};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    padding-left: 16px;

    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    background: transparent;
    border: none;

    font-size: 1.3rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXTS_300};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 0.8rem;
    }
  }

  > svg {
    margin-left: 16px;
  }
`
