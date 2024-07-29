import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  position: relative;
  opacity: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding: 1rem;

  border-radius: 0.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  &.inactive {
    transform: translateX(-50vh);
    opacity: 0;
    transition: all 900ms;
  }

  > img {
    max-width: 5rem;
  }
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  > button {
    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    font-size: 1.2rem;
    font-weight: 700;
  }
`

export const Controls = styled.div`
  width: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5px;

  > button {
    width: 28px;

    &.trash svg {
      color: ${({ theme }) => theme.COLORS.DARK_RED};
    }
  }
`
