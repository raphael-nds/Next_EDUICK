import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.main.white};
    width: 100%;

    padding: 10px;
    text-align: center;

    @media (min-width: 920px) {
      width: 80%;
      margin: auto;
    }

    @media (min-width: 1770px) {
      max-width: 80%;
    }
  `}
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 60px;

  align-items: center;
  padding: 2.5rem auto;

  @media (min-width: 476px) {
    padding: 2.5rem 3rem;
  }
`
export const HeaderMobile = styled.div`
  ${({ theme }) => css`
    @media (max-width: 720px) {
      display: flex;

      > button {
        display: flex;
        border: none;
        font-size: 3rem;
        align-items: center;

        .menu-icon {
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      }

      ul.navBarMobile {
        position: absolute;
        display: block;

        list-style: none;
        left: 0;
        top: 82px;
        transition: all 0.5s ease-out;
        width: 100%;
        height: 100vh;
        padding: 20px 0;
        z-index: 99;
        background: ${theme.colors.main.backgroundDark};

        .menu-icon {
          position: absolute;
          right: 0;
        }

        li {
          padding: 30px 0;
          margin: auto;
          justify-content: center;
          background: ${theme.colors.main.backgroundDark};

          .btnGetStarted {
            width: 90%;
            border: none;
            border-radius: 0.25rem;

            align-items: center;
            justify-content: center;

            color: ${theme.colors.main.purple};
            font-weight: 700;
            font-size: 3rem;
            line-height: 1.5rem;

            letter-spacing: -2%;

            background-color: ${theme.colors.main.yellow};
          }
        }
      }
    }

    @media (min-width: 720px) {
      display: none;
    }
  `}
`
export const HeaderDesktop = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 95%;
    margin: auto;
    z-index: 99;

    @media (min-width: 720px) {
      display: flex;

      > ul.navBar {
        display: flex;
        width: 100%;

        list-style: none;

        text-align: center;
        align-items: center;
        justify-content: space-between;

        font-weight: 400;
        font-size: 1.25rem;
        line-height: 3.5rem;
        letter-spacing: -2%;

        > div {
          display: flex;
        }

        li {
          margin-left: 4rem;
        }

        button {
          width: 200px;

          border: none;
          border-radius: 0.25rem;

          align-items: center;
          justify-content: center;

          color: ${theme.colors.main.purple};
          font-weight: 700;
          letter-spacing: -2%;

          background-color: ${theme.colors.main.yellow};
        }
      }
    }

    @media (min-width: 1770px) {
      width: 100%;
      justify-content: space-between;
    }

    @media (max-width: 720px) {
      display: none;
    }
  `}
`
