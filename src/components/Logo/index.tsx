import { ReactSVG } from 'react-svg'
import * as S from './styles'

export const Logo = () => {
  return (
    <S.Wrapper>
      <ReactSVG wrapper="div" src="/assets/logo.svg" aria-label="logo" />
    </S.Wrapper>
  )
}
