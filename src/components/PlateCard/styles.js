import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  padding: 2.4rem;

  border-radius: 0.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  .heart-favourite {
    position: absolute;
    top: 15px;
    right: 15px;

    font-size: 1.6rem;
    cursor: pointer;
  }

  > img {
    max-width: 8.8rem;
  }
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  > button {
    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    font-size: 1.5rem;
    font-weight: 700;
  }

  > p {
    display: none;
    text-align: center;
    font-size: 1rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: block;
    }
  }

  > span {
    font-size: 1.5rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ACCENT};
  }
`
