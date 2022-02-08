import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Items } from 'components/Items'

import { api } from 'services/api'

import * as S from './styles'

type DataCourses = [
  {
    id: number
    image: string
    rating: number
    title: string
    total_lessons: number
  }
]

const DashboardPage = () => {
  // CHAMADA NA API
  const getCourses = async () => {
    const { data } = await api.get('/courses')
    return data
  }

  // REACT QUERY PARA ARMAZENAR DADOS DA API
  const { error, isLoading } = useQuery('@courses-cache', getCourses)

  const coursesCache = useQuery<DataCourses>('@courses-cache')
  const dataCourses = coursesCache.data

  return (
    <S.Wrapper>
      <h1>dash</h1>
      <S.Container>
        {dataCourses?.map((item) => (
          <Items
            key={item.id}
            img={item.image}
            star={item.rating}
            totalLessons={item.total_lessons}
            title={item.title}
          />
        ))}
      </S.Container>

      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </S.Wrapper>
  )
}

export default DashboardPage
