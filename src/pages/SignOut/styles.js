import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 30px 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 278px;
    margin-bottom: 40px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
    gap: 20%;

    > img {
      width: 324px;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 3rem;

  border-radius: 0.7rem;

  > h2 {
    display: none;
  }

  .input-wrapper {
    width: 100%;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.TEXTS_300};

    > div {
      margin-top: 10px;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_100};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 476px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h2 {
      font-size: 1.2rem;
      font-weight: 300;
      text-align: center;
    }

    .input-wrapper {
      font-size: 1rem;
    }
  }
`
