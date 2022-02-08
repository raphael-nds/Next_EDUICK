import styled, { css } from 'styled-components'

type Backgrounds = {
  isActive: boolean
  activeColor: 'backgroundDark'
}
const colors = {
  backgroundDark: 'rgba(32, 14, 100, 1)',
  background: 'rgba(121, 85, 232, 1)'
}

export const Wrapper = styled.div<Backgrounds>`
  ${({ isActive }) => css`
    background-color: ${isActive ? colors.backgroundDark : colors.background};

    width: 100vw;
    min-height: 100%;
    position: relative;

    overflow: auto;
    overflow-x: hidden;
  `}
`
export const ContainerImage = styled.div`
  position: absolute;
  right: 0;
  pointer-events: none;

  z-index: 5;

  justify-content: space-between;

  @media (max-width: 1080px) {
    margin: auto;
    margin-top: 600px;
  }

  @media (min-width: 1080px) {
    display: flex;
    width: 95%;
    margin: auto;

    justify-content: space-between;

    .assets-left,
    .assets-right {
      max-width: 40%;
      margin-top: 200px;
    }

    .assets-right {
      margin-right: -300px;
    }
  }

  @media (min-width: 1550px) {
    justify-content: space-around;
  }

  .assets-left {
    @media (max-width: 1080px) {
      display: flex;
      width: 100%;
      max-width: 60%;
      height: fit-content;

      margin: 0 auto;
    }
  }
  .assets-right {
    display: flex;
    position: relative;
    right: 0;
    top: -250px;

    @media (max-width: 1080px) {
      display: none;
    }
  }

  /* > div.content-assets-left {
    display: flex;
    position: relative;
    width: auto;
    height: auto;

    top: 200px;
    left: 200px;

    .one {
      position: absolute;

      z-index: 9;
    }

    .two {
      position: relative;
      width: 387px;
      height: 767px;
      margin-left: -100px;
    }

    > div.three {
      position: absolute;
      z-index: 4;
    }
    > div.four {
      position: absolute;
      z-index: 6;
    }
  }

  > div.content-right-assets {
    display: flex;
    width: 50%;
    position: relative;
    //    margin-left: 10%;
    background: red;

    > div.one {
      position: relative;
      z-index: 2;
      margin-top: -10rem;
      margin-left: -12rem;
    }
    > div.two {
      position: absolute;
      z-index: 4;
      margin-top: -19rem;

      width: 463px;
      height: 1120px;
    }
  } */
`
export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 20%;

    background: ${theme.colors.main.backgroundDark};

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 1;
  `}
`
