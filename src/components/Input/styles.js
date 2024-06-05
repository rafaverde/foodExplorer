import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.TEXTS_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;
    padding-left: 16px;

    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    background: transparent;
    border: none;

    font-size: 0.8rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXTS_500};
    }
  }

  > svg {
    margin-left: 16px;
  }
`
