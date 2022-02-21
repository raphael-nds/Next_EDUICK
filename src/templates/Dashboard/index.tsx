import { useEffect, useState, useRef } from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { toast } from 'react-toastify'

import { Items } from 'components/Items'
import { Spinner } from 'components/Spinner'
import { Logo } from 'components/Logo'
import { CardProfile } from 'components/CardProfile'

import { DataCourses, useServiceCourses } from 'services/courseService'

import { ModalUpdateCourse } from './ModalUpdateCourse'
import * as S from './styles'

const DashboardPage = () => {
  const { getCourses, deleteCourse } = useServiceCourses()

  const containerRef = useRef<any>(null)

  const [returnCourse, setReturnCourse] = useState<DataCourses[]>([])
  const [page, setPage] = useState(1)
  const [totalCourse, setTotalCourses] = useState(1)
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false)
  const [modalCurrentProps, setModalCurrentProps] = useState<DataCourses>()

  //Resolver problema nas requisições
  console.log('-----', returnCourse)

  useEffect(() => {
    async function fetchData() {
      const response = await getCourses(page)
      setReturnCourse((oldState) => [...oldState, ...response])
    }

    fetchData()
  }, [page])

  useEffect(() => {
    const target = document.querySelector('#container')

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log('Sentinela appears!', page + 1)
        setPage((currentValue) => currentValue + 1)
      }
    })
    if (target) {
      intersectionObserver.observe(target)
    }
    return () => intersectionObserver.disconnect()
  }, [])

  const { error, isLoading } = useQuery(
    ['@courses-cache'],

    () => getCourses(page)
    // { staleTime: 1000 * 5 }
  )

  function handleClickModalClose() {
    setModalUpdateOpen(false)
  }
  const coursesCache = useQuery<DataCourses>('@courses-cache')
  // const dataCourses = coursesCache.data

  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <div className="left">
            <Logo />
            <span>My Classes</span>
          </div>

          <div className="right">
            <button>CHANGE TO TEACHER MODO</button>
            <CardProfile
              imgUser={'/assets/avatar.svg'}
              // emailUser={user?.email}
              // nameUser={' '}
            />
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
        {returnCourse?.map((item) => (
          <>
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
          </>
        ))}
        <div style={{ height: ' 5px', background: 'red' }} id="container" />

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
