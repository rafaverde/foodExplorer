import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 3rem;

  position: relative;
  overflow: auto;

  > div {
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200};

    display: flex;
    align-items: center;
    gap: 2rem;

    padding-right: 2rem;

    border-radius: 1rem;

    > img {
      max-width: 40%;
    }

    h2 {
      font-size: 1.8rem;
      line-height: 1;
    }

    h4 {
      font-weight: 300;
    }
  }
`
