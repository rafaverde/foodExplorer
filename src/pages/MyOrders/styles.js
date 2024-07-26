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

//Orders Table
export const OrderTable = styled.ul`
  width: 100%;

  border-radius: 0.7rem;
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
  }
`

export const TableLine = styled.li`
  display: grid;
  grid-template-columns: 1fr 5fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "id status date"
    "description description description";

  margin-bottom: 20px;
  padding: 10px;

  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
  border-radius: 0.7rem;

  &.admin {
    grid-template-areas:
      "id status date"
      "description description user";
  }

  &:first-child {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: 3fr 1fr 7fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "status id description date";

    padding: 0;
    margin: 0;

    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

    &.admin {
      grid-template-columns: 2fr 1fr 2fr 4fr 1fr;
      grid-template-areas: "status id user description date";
    }

    &:first-child {
      display: grid;
      font-weight: bold;
    }
  }
`

export const TableColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px 15px;

  color: ${({ theme }) => theme.COLORS.TEXTS_500};

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 15px;
    border-right: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

    &:last-child {
      border: none;
    }
  }

  > svg {
    margin-right: 8px;

    &.pending {
      color: ${({ theme }) => theme.COLORS.DARK_RED};
    }

    &.making {
      color: ${({ theme }) => theme.COLORS.YELLOW};
    }

    &.done {
      color: ${({ theme }) => theme.COLORS.YELLOW};
    }
  }
`
