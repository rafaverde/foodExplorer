import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../styles/deviceBreakpoints"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 16px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
      font-size: 120%;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
      font-size: 140%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    color: ${({ theme }) => theme.COLORS.TEXTS_100};

    font-family: ${({ theme }) => theme.FONTS.SECONDARY_FONT};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button {border: none; background: none}

  button:hover, a:hover {
    opacity: 0.9;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
  }

  input {
    outline: none;
  }

  
`
