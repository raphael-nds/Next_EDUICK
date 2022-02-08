import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    > h1 {
      width: 80%;
      font-weight: 400;
      font-size: 4rem;
      line-height: 3.5rem;
      letter-spacing: -2%;
      margin-bottom: 4rem;
      color: ${theme.colors.main.white};
      text-align: left;

      span {
        display: block;
        margin-top: 1.2rem;
        font-weight: 700;
        color: ${theme.colors.main.yellowOpacity};
        text-transform: uppercase;
      }
    }

    @media (max-width: 413px) {
      h1 {
        font-size: 2.5rem;
      }
    }
  `}
`
