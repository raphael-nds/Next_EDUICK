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
        <BsStarFill
          key={index}
          fontSize="2.5rem"
          color={index >= rating ? '#ccc' : 'yellow'}
        />
      ))}
    </S.Wrapper>
  )
}
