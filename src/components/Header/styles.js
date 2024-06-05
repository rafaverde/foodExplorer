import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 114px;
  padding: 30px 3rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > img {
    width: 160px;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 185px;
    }
  }

  > button {
    max-width: 12rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1.5rem 3rem;
    height: auto;
  }
`

export const Menu = styled.button`
  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.TEXTS_100};
    font-size: 3.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`

export const LogOut = styled.button`
  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.TEXTS_100};
    font-size: 1.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export const Search = styled.div`
  height: 56px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  border-radius: 0.7rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`
