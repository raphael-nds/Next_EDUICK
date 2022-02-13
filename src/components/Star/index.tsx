import { BsStarFill } from 'react-icons/bs'

import * as S from './styles'

type Props = {
  rating: number
}
export const Star = ({ rating = 0 }: Props) => {
  const star = Array(5).fill(0)

  return (
    <S.Wrapper>
      {star?.map((_, index) => (
        <div key={index}>
          <BsStarFill
            fontSize="2rem"
            color={index >= rating ? '#ccc' : '#FFC908'}
          />
        </div>
      ))}
    </S.Wrapper>
  )
}
