import * as S from './styles'

export type ProfileProps = {
  imgUser?: string
  nameUser?: string
  emailUser?: string
}

export const CardProfile = ({ imgUser, nameUser, emailUser }: ProfileProps) => {
  return (
    <S.Wrapper>
      <S.ContainerInfo>
        <p>{nameUser}</p>
        <span>{emailUser}</span>
      </S.ContainerInfo>
      <S.ContainerImg imgUser={imgUser} />
    </S.Wrapper>
  )
}
