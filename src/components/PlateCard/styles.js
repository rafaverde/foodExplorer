import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"
import heart from "../../assets/heart.svg"
import heartFilledRed from "../../assets/heart-filled-red.svg"

export const Container = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  padding: 2.4rem;

  border-radius: 0.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > img {
    max-width: 8.8rem;
  }

  .edit-plate {
    position: absolute;
    right: 15px;
    top: 15px;
  }
`

export const FavouriteForm = styled.form`
  position: absolute;
  top: 15px;
  right: 15px;

  font-size: 1.6rem;
  cursor: pointer;
`

export const HeartCheckBox = styled.div`
  position: relative;

  > label {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0;
  }

  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    opacity: 0;
    cursor: pointer;
  }

  > label::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background-image: url(${heart});
    background-size: contain;
  }

  > input:checked + label::before {
    background-image: url(${heartFilledRed});
    background-size: contain;
  }

  .check-favourite {
    position: absolute !important;
    top: 0;
    right: 0;

    > svg {
      width: 30px !important;
      height: 30px !important;
    }
  }
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  > button {
    color: ${({ theme }) => theme.COLORS.TEXTS_300};
    font-size: 1.5rem;
    font-weight: 700;
  }

  > p {
    display: none;
    text-align: center;
    font-size: 1rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: block;
    }
  }

  > span {
    font-size: 1.8rem;
    margin: 5px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ACCENT};
  }
`
