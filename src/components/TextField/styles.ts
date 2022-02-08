import styled, { css } from 'styled-components'

type WrapperProps = {
  filled: boolean
  focused: boolean
  error: boolean
}

export const Wrapper = styled.div`
  flex: 1;
`

export const WrapperInput = styled.div<WrapperProps>`
  ${({ theme, focused, error }) => css`
    display: flex;
    flex: 1;
    align-items: center;
    border: 1px solid rgba(200, 200, 200, 0.3);
    border-radius: ${theme.border.radius.sm};
    font-size: ${theme.font.sizes.md};
    line-height: 2.4rem;
    font-weight: 500;
    color: ${theme.colors.main.white};
    outline: none;

    ${focused &&
    css`
      border: 1px solid ${theme.colors.main.white};
    `}

    ${error &&
    css`
      border: 1px solid ${theme.colors.alerts.red};
    `}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: 4.8rem;
    width: 100%;
    border: none;
    border-radius: ${theme.border.radius.sm};
    padding: ${theme.spacings.xsm} ${theme.spacings.sm};
    font-size: ${theme.font.sizes.md};
    line-height: 2.4rem;
    font-weight: 500;
    color: ${theme.colors.main.white};
    outline: none;

    &::placeholder {
      font-size: ${theme.font.sizes.md};
      line-height: 2.4rem;
      color: ${theme.colors.main.white};
      font-weight: 500;
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.alerts.red};
    margin-left: 1.2rem;
    margin-top: 4px;
  `}
`

export const Label = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsm};
    color: ${theme.colors.main.white};
    font-weight: 500;
    margin-bottom: 1.2rem;
    > span {
      color: ${theme.colors.alerts.red};
    }
  `}
`

export const Password = styled.div`
  ${({ theme }) => css`
    padding: 0.5rem;
    cursor: pointer;
    svg {
      color: ${theme.colors.main.white};
    }
  `}
`
