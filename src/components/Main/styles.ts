import styled, { css } from 'styled-components'

const colors = {
  backgroundDark: 'rgba(32, 14, 100, 1)',
  background: 'rgba(121, 85, 232, 1)'
}
export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 620px;
    height: 100vh;

    margin-bottom: 200px;

    align-items: center;
    justify-content: center;

    color: ${theme.colors.main.white};
    width: 100%;

    padding: 10px;
    text-align: center;
    z-index: 10;
  `}

  @media (max-width: 1020px) {
    margin: auto;
    margin-bottom: 200px;
  }

  @media (min-width: 1020px) {
    position: relative;
    margin: 150px auto auto auto;
    width: 100%;
    max-width: 600px;
    top: 15%;
    left: 15%;
  }

  @media (min-width: 1770px) {
    margin: 200px auto auto auto;
    max-width: 920px;
    height: 800px;
    padding: 30px;
  }
`
export const Section = styled.div`
  width: 100%;

  align-items: center;
  justify-content: left;
  margin-top: 7rem;

  padding: 0 3rem;

  ${({ theme }) => css`
    > div.typography {
      display: none;
      width: 72%;
      color: ${theme.colors.main.white};
      font-weight: 400;
      line-height: 3rem;
      margin-bottom: 5rem;
    }

    > div.container-input-btn {
      width: 100%;

      > div.btn {
        width: 100%;
        display: flex;

        gap: 30px;

        margin: 4rem auto;

        @media (max-width: 476px) {
          display: block;
        }
      }

      button.search {
        width: 100%;
        border: 1px solid white;
        border-radius: 0.25rem;
        cursor: pointer;
        display: flex;
        justify-content: center;

        align-items: center;
        justify-content: center;

        color: ${theme.colors.main.purple};
        font-weight: 700;
        font-size: 3rem;
        line-height: 1.5rem;

        //margin: 1.5rem 3rem;
        letter-spacing: -2%;

        background-color: ${theme.colors.main.yellow};
      }
    }
  `}
`

export const Form = styled.form``

type Radio = {
  isActive: boolean
  activeColor: 'background'
}
export const RadioBox = styled.input<Radio>`
  background: ${(prop) => (prop.isActive ? colors.background : 'transparent')};
  border: ${(prop) => (prop.isActive ? '1px solid white' : 'transparent')};
  width: 100%;
  cursor: pointer;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }

  //
`
