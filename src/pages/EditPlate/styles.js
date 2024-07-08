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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;

  border-radius: 0.7rem;

  > h2 {
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 24px;
  }

  .upload-button {
    padding: 16px;
    display: flex;
    align-items: center;

    border-radius: 0.7rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    cursor: pointer;

    > svg {
      font-size: 1.6rem;
    }

    > span {
      margin-left: 15px;
      font-size: 1.4rem;
    }

    > input {
      display: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: row;
      height: 56px;

      > svg {
        font-size: 1.2rem;
      }

      > span {
        font-size: 1rem;
      }
    }
  }

  .save-button {
    margin-top: 16px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .save-button {
      width: 100%;
      display: flex;
      justify-content: end;
    }

    .save-button > button {
      max-width: 320px;
    }
  }
`

export const Thumbnail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  > img {
    width: 180px;
    border-radius: 200px;
  }
`

export const InputGroup = styled.div`
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    gap: 16px;
    align-items: end;

    > label > div {
      margin-bottom: 0;
    }
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-top: 16px;
  flex: 1;

  font-size: 1.4rem;

  border-radius: 0.7rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1rem;
  }
`

export const Ingredients = styled.div`
  width: 100%;
  padding: 16px;
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 0.7rem;
`
