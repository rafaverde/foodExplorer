import styled from "styled-components"

export const Container = styled.div`
  width: 64px;
  /* margin: 5px auto; */
  position: relative;
  margin-bottom: 20px;

  > span {
    display: block;
    width: 64px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_200};
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  button {
    padding: 8px;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 999px;
    animation: ${({ theme, $ison }) =>
      $ison === "true"
        ? theme.ANIMATIONS.SLIDE_RIGHT
        : theme.ANIMATIONS.SLIDE_LEFT};

    > svg {
      font-size: 1.2rem;
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
