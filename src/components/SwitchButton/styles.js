import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 64px;
  /* margin: 5px auto; */
  position: relative;
  margin-bottom: 20px;

  > span {
    display: block;
    width: 64px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  button {
    padding: 8px;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 999px;
    animation: ${({ theme, $ison }) =>
      $ison === true
        ? theme.ANIMATIONS.SLIDE_RIGHT
        : theme.ANIMATIONS.SLIDE_LEFT};

    > svg {
      font-size: 1.6rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 1.2rem;
      }
    }
  }

  /*Animations*/
  @keyframes slide-right {
    from {
      left: 0;
    }
    to {
      left: 50%;
    }
  }

  @keyframes slide-left {
    from {
      left: 50%;
    }
    to {
      left: 0;
    }
  }
`
