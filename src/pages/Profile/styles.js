import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "content"
    "footer";
`

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - (114px + 77px + 30px));
  padding: 30px 3rem;

  grid-area: content;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Menu = styled.aside`
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Nav = styled.nav`
  display: none;
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    gap: 10px;

    svg {
      font-size: 1.4rem;
    }

    button {
      font-size: 1rem;
      padding: 20px 25px;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-radius: 0.7rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  border-radius: 0.7rem;

  > div:nth-child(3),
  div:nth-child(5) {
    margin-bottom: 15px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 600px;
  }
`

export const Avatar = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto 40px;

  position: relative;

  > img {
    width: 180px;
    height: 180px;

    border-radius: 200px;
  }

  > label {
    width: 48px;
    height: 48px;
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    background-color: ${({ theme }) => theme.COLORS.ACCENT};

    font-size: 28px;
    cursor: pointer;

    > input {
      display: none;
    }
  }

  .close-button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px;

    border-radius: 99px;
    background-color: lightcoral;

    > svg {
      font-size: 20px;
    }
  }
`
