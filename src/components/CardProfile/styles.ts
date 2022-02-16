import styled, { css } from 'styled-components'
import { ProfileProps } from '.'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`

export const ContainerImg = styled.div<Pick<ProfileProps, 'imgUser'>>`
  ${({ theme, imgUser }) => css`
    width: 55px;
    height: 62px;
    //border-radius: 50%;

    background-image: url(${imgUser});
    background-size: cover;
    background-repeat: no-repeat;

    position: relative;
  `}
`

export const ContainerInfo = styled.div`
  ${({ theme }) => css`
    > p {
      font-size: ${theme.font.sizes.md};
      font-weight: 600;
      color: ${theme.colors.main.white};
    }

    > span {
      font-size: 1.3rem;
      font-weight: 400;
      color: ${theme.colors.main.white};
    }
  `}
`
