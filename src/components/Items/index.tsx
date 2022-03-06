import { Star } from 'components/Star'
import * as S from './styles'

export type Props = {
  title: string
  img: string
  star: number
  totalLessons: number
  onClick: () => void
  onClickDelete: () => void
}

export const Items = ({
  title,
  img,
  star,
  totalLessons,
  onClick,
  onClickDelete
}: Props) => {
  return (
    <S.Wrapper>
      <div onClick={onClick}>
        <img src={img} alt="" />
        <div className="space">
          <Star rating={star} />
          <div className="lessons">
            {totalLessons} {totalLessons === 1 ? 'LESSON' : 'LESSONS'}
          </div>
        </div>
        <h3>{title}</h3>
      </div>

      <S.WrapperDelete>
        <span onClick={onClickDelete}>delete</span>
      </S.WrapperDelete>
    </S.Wrapper>
  )
}
