import styled, { css } from 'styled-components'

type WrapperMapOptionProps = {
  isChecked: boolean
}

export const WrapperMapOption = styled.button<WrapperMapOptionProps>`
  ${({ theme, isChecked }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4.8rem;
    background: transparent;
    border-radius: 0.25rem;
    border: none;
    align-items: center;
    justify-content: center;

    ${isChecked &&
    css`
      border: 1px solid ${theme.colors.main.white};
      background: ${theme.colors.main.background};
    `}

    label {
      width: 100%;
      height: 4.8rem;
      font-size: 12px;
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.4rem 1.6rem;
      cursor: pointer;

      input {
        display: none;
      }
    }
  `}
`

export const Checked = styled.div`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background: ${theme.colors.main.background};
    box-sizing: border-box;
    margin-right: 0.8rem;
    margin-bottom: 1px;
    border-radius: 50%;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${theme.colors.main.yellow} url('/assets/circle_checked.svg')
        center no-repeat;
      display: block;
      transform: scale(0);
      transition: all 0.1s;
    }
  `}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  input:checked + ${Container} {
    ${Checked} {
      border-radius: 50%;
    }
    ${Checked}::before {
      transform: scale(1);
    }
  }

  @media (max-width: 476px) {
    display: block;
  }
`
