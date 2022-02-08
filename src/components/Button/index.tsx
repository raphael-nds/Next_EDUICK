import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>
}
