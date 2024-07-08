import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.TEXTS_300};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  font-size: 1.4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 0.8rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.TEXTS_500};
  }
`
