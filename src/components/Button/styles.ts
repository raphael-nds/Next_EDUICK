import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 4.8rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    align-items: center;
    justify-content: center;

    color: ${theme.colors.main.purple};
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.5rem;

    letter-spacing: -2%;

    background-color: ${theme.colors.main.yellow};
  `}
`
