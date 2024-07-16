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

  > .avatar {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }

    > img {
      width: 64px;
      height: 64px;

      border: 1px solid ${({ theme }) => theme.COLORS.ACCENT};
      border-radius: 100px;
    }
  }

  > .add-plate {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.TEXTS_100};
    font-size: 22px;

    &:hover {
      opacity: 0.85;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
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

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > span {
    padding: 4px 10px;
    background-color: ${({ theme }) => theme.COLORS.ACCENT};
    border-radius: 99px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    gap: 0;
    align-items: end;
    font-size: 0.8rem;
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
