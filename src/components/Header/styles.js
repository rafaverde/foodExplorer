import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 114px;
  padding: 30px 3rem 0;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > img {
    width: 160px;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 185px;
    }
  }

  > button {
    max-width: 230px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 30px 3rem;
  }

  .order-button {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }

  > a > img {
    width: 64px;
    height: 64px;

    border: 1px solid ${({ theme }) => theme.COLORS.ACCENT};
    border-radius: 100px;
  }
`

export const Menu = styled.button`
  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.TEXTS_100};
    font-size: 2.8rem;
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

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 0.7rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`
