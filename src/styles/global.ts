import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing: grayscale;
  }


  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #__next {
    height: 100%;
  }

  body,
  #root {
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      overflow: auto;
      overflow-x: hidden;
      font-family: 'Open Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 300;
    }

    input,
    textarea,
    button {
      ${({ theme }) => css`
        font-family: 'Open Sans';

        background-color: transparent;

        border-radius: 4px;
        height: 4.8rem;
        padding: 1.6rem 2rem;
        color: ${theme.colors.main.white};
      `}
    }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .react-modal-overlay{
    ${({ theme }) => css`
      background: ${theme.colors.main.background};
    `}
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 999;

      padding: 32px;

      display: flex;

    @media (min-width: 576px){
      background-color: rgba(0,0,0,0.5);

      /* position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 999;

      padding: 3rem; */

      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

  .react-modal-content{
    width: 100%;
    border-radius: 0.25rem;

    ${({ theme }) => css`
      background: ${theme.colors.main.background};
    `}

    @media (min-width: 576px){
      max-width: 500px;
    }
    /* width: 100vw;
    height: 100vh;

    padding

    align-items: center;
    justify-content: center; */

    /* @media (min-width: 476px){
      width: 100%;
      max-width: 476px;
      background-color: white;
      position: relative;

      border-radius: 4px;
    } */

    @media (min-width: 476px){
      padding: 3rem;
    }
  }

  .react-modal-close{
    display: flex;
    align-items: center;

    position: absolute;
    right: -10px;
    top: -10px;
    border: none;

    font-size: 3rem;

    @media (min-width: 476px){
      width: auto;
      height: auto;
      right: -50px;
      top: -50px;

      font-size: 2rem;

      border-radius: 50%;
      background:rgba(32, 14, 100, 1);
    }

    transition:  filter 0.2s;
    &:hover {
        cursor: pointer;
        filter: brightness(0.8)
    }
  }

`

export default GlobalStyles
