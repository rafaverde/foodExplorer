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
