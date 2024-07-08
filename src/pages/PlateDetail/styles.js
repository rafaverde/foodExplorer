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
  gap: 30px;
`

export const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  > img {
    width: 264px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;

    max-width: 960px;
    margin: 0 auto;

    > img {
      width: 390px;
    }
  }
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  > h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  > p {
    text-align: center;
    font-size: 1.3rem;
  }

  > span {
    font-size: 1.4rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ACCENT};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 50%;
    align-items: start;

    p {
      font-size: 1.1rem;
    }
  }
`

export const TagsSection = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  margin: 16px 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: start;
  }
`

export const ButtonsSection = styled.div`
  width: 80%;
  display: flex;
  gap: 30px;

  justify-content: center;

  margin: 16px 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: start;
  }
`
