import { Star } from 'components/Star'
import * as S from './styles'

export type Props = {
  title: string
  img: string
  star: number
  totalLessons: number
}

export const Items = ({ title, img, star, totalLessons }: Props) => {
  return (
    <S.Wrapper>
      <img src={img} alt="" />
      <div className="space">
        <Star rating={star} />
        <div className="lessons">
          {totalLessons} {totalLessons === 1 ? 'LESSON' : 'LESSONS'}
        </div>
      </div>
      <h3>{title}</h3>
    </S.Wrapper>
  )
}
