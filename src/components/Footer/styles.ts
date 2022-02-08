import styled, { css } from 'styled-components'

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;

    background: ${theme.colors.main.backgroundDark};

    position: absolute;
    bottom: 0;
    left: 0;

    z-index: 1;
  `}
`
