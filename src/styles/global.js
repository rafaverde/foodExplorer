import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  
`
