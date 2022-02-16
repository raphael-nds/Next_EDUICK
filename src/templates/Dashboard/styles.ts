import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: #e5e5e5;
`
export const Header = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.main.background};
    width: 100%;

    margin-bottom: 20px;
    text-align: center;

    > div {
      display: flex;
      width: 100%;
      max-width: 79%;

      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      padding: 10px;

      > div.left {
        width: 30%;
        display: flex;

        > span {
          margin-left: 20px;
        }
      }
      > div.right {
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > button {
          width: auto;
          border: none;

          cursor: pointer;

          background: rgba(32, 14, 100, 0.3);
        }
      }

      @media (max-width: 720px) {
        display: block;
      }
    }
  `}
`

export const SectionMobile = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 79%;
    height: auto;
    min-height: 200px;

    margin: 0 auto 50px auto;
    border-radius: 0.25rem;
    background: ${theme.colors.main.white};

    > div {
      display: flex;
      max-width: 80%;
      margin: 0 auto;
      padding: 20px 0;
      justify-content: space-between;

      h5 {
        margin-bottom: 20px;
        color: ${theme.colors.main.backgroundDark};
        font-size: 2rem;
      }

      img {
        margin-top: -20px;
        height: 70px;
      }
    }
    > p {
      max-width: 80%;
      margin: 0 auto;
    }
  `}

  @media (min-width: 840px) {
    display: none;
  }
`
export const SectionDesktop = styled.section`
  ${({ theme }) => css`
    display: flex;

    width: 100%;
    max-width: 79%;
    height: 250px;

    margin: 0 auto 50px auto;
    border-radius: 0.25rem;
    background: ${theme.colors.main.white};

    > img {
      margin: auto 0;
      margin-left: -40px;
    }

    > img.assets-left {
      height: 150px;
    }
    > img.assets-right {
      height: 200px;
    }

    > div {
      margin: 60px 40px;

      h5 {
        margin-bottom: 20px;
        color: ${theme.colors.main.backgroundDark};
        font-size: 2rem;
      }

      p {
        max-width: 500px;
      }
    }
  `}

  @media (max-width: 840px) {
    display: none;
  }
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 80%;

  margin: 0 auto;
`
export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;

    padding: 20px 0;
    margin-top: 30px;

    p {
      width: 90%;
      align-items: center;
      text-align: center;
      margin: 0 auto;
    }

    background: ${theme.colors.main.white};
  `}
`
