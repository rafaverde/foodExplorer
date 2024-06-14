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
  gap: 46px;
`

export const Form = styled.form`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  border-radius: 0.7rem;

  > div:nth-child(3) {
    margin-bottom: 16px;
  }
`

export const Avatar = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto 20px;

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
