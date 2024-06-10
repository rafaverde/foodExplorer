import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  position: absolute;
  z-index: 99;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  transform: translateX(-100%);
  transition: all ease-out 0.4s;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

  #menu_wrapper {
    padding: 30px 3rem;
  }
`

export const Search = styled.div`
  height: 56px;
  width: 100%;
  margin-bottom: 40px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  border-radius: 0.7rem;

  > input {
    font-size: 1.2rem;
  }
`

export const Header = styled.div`
  width: 100%;
  height: 114px;
  padding: 30px 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > span,
  svg {
    font-size: 2rem;

    color: ${({ theme }) => theme.COLORS.TEXTS_500};
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
