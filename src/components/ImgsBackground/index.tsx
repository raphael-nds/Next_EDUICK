import * as S from './styles'

export const ImgsBackground = () => {
  return (
    <S.ContainerImage>
      <img src="/assets/detail_left.svg" alt="left" className="assets-left" />
      <img
        src="/assets/detail_right.svg"
        alt="right"
        className="assets-right"
      />
    </S.ContainerImage>
  )
}
