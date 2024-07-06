import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 48%;

  height: 56px;

  background-color: ${({ theme, $isnew }) =>
    $isnew === "true" ? "transparent" : theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.TEXTS_300};

  border: ${({ theme, $isnew }) =>
    $isnew === "true" ? `2px dashed ${theme.COLORS.BACKGROUND_400}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.DARK_RED};
    font-size: 24px;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.MINT_GREEN};
    font-size: 24px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    background: transparent;

    border: none;

    font-size: 1.4rem;
    text-transform: capitalize;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXTS_300};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 0.9rem;
    }
  }
`
