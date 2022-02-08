import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 325px;

    align-items: center;
    justify-content: center;

    padding: 15px;
    margin: 0 auto;

    background: ${theme.colors.main.white};
    border-radius: 0.25rem;

    > img {
      display: flex;
      width: 100%;
      height: 150px;

      background-position: no-repeat cover;

      margin: 0 auto;
      border-radius: 0.25rem;
    }

    > div.space {
      display: flex;
      width: 100%;

      align-items: center;
      justify-content: space-between;
      margin: 0 auto;

      > div.lessons {
        background: #cfc9e9;
        padding: 10px;
        margin: 5px 0;
        border-radius: 0.25rem;
      }
      > div.star {
      }
    }

    > h3 {
      width: 100%;
      margin: 0 auto;

      text-align: center;
    }
  `}
`
