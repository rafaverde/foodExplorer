import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  position: relative;
  opacity: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  padding: 1rem;

  border-radius: 0.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  animation: fadein 1s 300ms forwards;

  &.inactive {
    opacity: 1;
    animation: fadeout 1s backwards;
    transform: translateX(-50vh);
    transition: all 900ms;
  }

  > img {
    max-width: 5rem;
  }

  > button {
    width: 28px;

    svg {
      color: ${({ theme }) => theme.COLORS.DARK_RED};
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
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
