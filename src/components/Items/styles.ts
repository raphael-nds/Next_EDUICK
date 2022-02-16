import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 325px;

    align-items: center;
    justify-content: center;

    padding: 15px;
    margin: 0 auto;

    cursor: pointer;

    background: ${theme.colors.main.white};
    border-radius: 0.25rem;

    @media (max-width: 840px) {
      max-width: 250px;
    }

    > div {
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
          padding: 5px 10px;
          margin: 10px 0;
          border-radius: 0.25rem;
        }
        > div.star {
          padding: 5px;
          margin: 10px 0;
          font-size: 1rem;
        }

        > span {
          background: red;
          z-index: 999;
        }

        @media (max-width: 320px) {
          display: block;
        }
      }

      > h3 {
        width: 100%;
        margin: 0 auto;
        min-height: 50px;

        text-align: center;
      }
    }
  `}
`
export const WrapperDelete = styled.div`
  width: 100%;
  max-width: 325px;

  align-items: center;
  text-align: center;

  padding: 15px;
  background: red;
`
