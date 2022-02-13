import { useEffect, useState, useRef } from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { toast } from 'react-toastify'

import { Items } from 'components/Items'
import { Spinner } from 'components/Spinner'

import { api } from 'services/api'

import * as S from './styles'
import { Logo } from 'components/Logo'
import { Button } from 'components/Button'
import { ModalUpdateCourse } from './ModalUpdateCourse'

export type DataCourses = {
  id: number
  image: string
  rating: number
  title: string
  total_lessons: number
}

const DashboardPage = () => {
  const containerRef = useRef<any>(null)

  const [course, setCourse] = useState<DataCourses[]>([])
  const [page, setPage] = useState(1)

  const [modalUpdateOpen, setModalUpdateOpen] = useState(false)
  const [modalCurrentProps, setModalCurrentProps] = useState<DataCourses>()

  // CHAMAR CURSOS
  const getCourses = async (page: number) => {
    await api
      .get(`/courses`, {
        params: {
          _limit: 9,
          _page: page
        }
      })
      .then(
        (response) => setCourse(response.data)
        //setCourse((oldState) => [...oldState, ...response.data])
      )
  }

  // DELETAR CURSOS
  async function deleteCourse(id: number) {
    await api.delete(`/courses/${id}`).then((response) => console.log(response))
  }

  // CHAMADA NA API
  useEffect(() => {
    async function fetchData() {
      await getCourses(page)
    }

    fetchData()
  }, [page, course])

  // useEffect(() => {
  //   // const options = {
  //   //   root: null,
  //   //   rootMargin: '0px',
  //   //   threshold: 1.0
  //   // }

  //   const intersectionObserver = new IntersectionObserver((entries) => {
  //     if (entries.some((entry) => entry.isIntersecting)) {
  //       setPage((currentValue) => currentValue + 1)
  //     }
  //   })

  //   intersectionObserver.observe(containerRef.current)
  //   return () => intersectionObserver.disconnect()
  // }, [])

  const { error, isLoading } = useQuery(
    ['@courses-cache', page],
    () => getCourses(page),
    { staleTime: 1000 * 5 }
  )

  function handleClickModalOpen(item: DataCourses) {
    const { id, title } = item
    return { id, title }
  }
  function handleClickModalClose() {
    setModalUpdateOpen(false)
  }
  const coursesCache = useQuery<DataCourses>('@courses-cache')
  const dataCourses = coursesCache.data

  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <div>
            <Logo />
            <span>My Classes</span>
          </div>

          <div>
            <button>CHANGE TO TEACHER MODO</button>
            <span>avatar</span>
          </div>
        </div>
      </S.Header>
      <S.SectionMobile>
        <div>
          <h5>
            Hello
            <strong> Student</strong>
            <span>.</span>
          </h5>
          <img
            src="/assets/details-dashboard-left.svg"
            alt="detail"
            className="assets"
          />
        </div>
        <p>
          Whether you are a student trying to find your ideal private language
          teachers/tutors
        </p>
      </S.SectionMobile>
      <S.SectionDesktop>
        <img
          src="/assets/details-dashboard-left.svg"
          alt="detail left"
          className="assets-left"
        />
        <div>
          <h5>
            Hello
            <strong> Student</strong>
            <span>.</span>
          </h5>

          <p>
            Whether you are a student trying to find your ideal private language
            teachers/tutors
          </p>
        </div>
        <img
          src="/assets/details-dashboard-right.svg"
          alt="detail right"
          className="assets-right"
        />
      </S.SectionDesktop>

      <S.Container>
        {course?.map((item) => (
          <Items
            key={item.id}
            onClickDelete={() => deleteCourse(item.id)}
            onClick={() => {
              setModalCurrentProps({
                id: item.id,
                image: item.image,
                rating: item.rating,
                title: item.title,
                total_lessons: item.total_lessons
              })
              setModalUpdateOpen(true)
            }}
            img={item.image}
            star={item.rating}
            totalLessons={item.total_lessons}
            title={item.title}
          />
        ))}

        {!isLoading && <div ref={containerRef} />}
      </S.Container>
      <S.Footer>
        <p>
          Copyright © 2020 <strong>Eduick</strong>. Todos os direitos
          reservados.
        </p>
      </S.Footer>
      {isLoading && <Spinner />}
      {error &&
        toast.error('Erro nos servidores', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })}
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />

      {/* MODAL Update */}
      <ModalUpdateCourse
        isModalOpen={modalUpdateOpen}
        OnModalClose={handleClickModalClose}
        handleClickArgs={modalCurrentProps}
      />
    </S.Wrapper>
  )
}

export default DashboardPage
