import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  position: relative;

  display: ${({ $isfavourite }) => ($isfavourite === true ? "flex" : "none")};

  flex-direction: row;
  align-items: center;
  gap: 12px;

  padding: 2.4rem;

  border-radius: 0.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  &.inactive {
    opacity: 0;
    transform: translateX(-50vh);
    transition: all 1s;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 48%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 32%;
  }

  > img {
    max-width: 7rem;
  }

  > button {
    width: 28px;

    svg {
      color: ${({ theme }) => theme.COLORS.DARK_RED};
    }
  }
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  > button {
    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    font-size: 1.2rem;
    font-weight: 700;
  }
`

export const Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  > span {
    font-size: 1.2rem;
    text-align: center;
  }
`
