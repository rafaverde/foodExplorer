import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 114px;
  padding-top: 30px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > img {
    width: 160px;
  }
`
