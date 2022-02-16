import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import * as S from './styles'

type PaginationProps = {
  totalCountRegister: number
  registerPerPage: number
  //onPageChange: (page: number) => void
}

const maxItems = 3
const maxLeft = (maxItems - 1) / 2

export const Pagination = ({
  totalCountRegister,
  registerPerPage = 6
}: // onPageChange
PaginationProps) => {
  const [offset, setOffSet] = useState(0)

  const totalPage = Math.ceil(totalCountRegister / registerPerPage)
  const currentPage = offset ? offset / registerPerPage + 1 : 1

  const maxFirst = Math.max(totalPage - (maxItems - 1), 1)
  const first = Math.min(Math.max(currentPage - maxLeft, 1), maxFirst)

  function onPageChange(currentPage: number) {
    setOffSet((currentPage - 1) * registerPerPage)
  }

  return (
    <S.Wrapper>
      <ul>
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiChevronLeft />
          </button>
        </li>
        {Array.from({ length: Math.min(maxItems, totalPage) })
          .map((_, index) => index + first)
          .map((totalPage) => (
            <li key={totalPage}>
              <button
                //onClick={() => onPageChange(totalPage)}
                className={totalPage === currentPage ? 'itemActive' : ''}
              >
                {totalPage}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
          >
            <FiChevronRight />
          </button>
        </li>
      </ul>
    </S.Wrapper>
  )
}
