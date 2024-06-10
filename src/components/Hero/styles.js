import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  padding: 3rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0;

    position: relative;

    border-radius: 1rem;

    > img {
      max-width: 60%;
    }

    #hero_info {
      padding: 30px 10px 30px 0;
    }

    h2 {
      font-size: 1.4rem;
      line-height: 1;
    }

    h4 {
      font-size: 0.9rem;
      font-weight: 300;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      h2 {
        font-size: 2.2rem;
      }

      h4 {
        font-size: 1.4rem;
      }
    }
  }

  #hero_gradient {
    width: 90%;
    height: 70%;

    right: 0;
    /* bottom: 10px; */

    position: absolute;
    z-index: -1;

    border-radius: 0.7rem;
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200};
  }
`
