import { useState } from 'react'

import * as S from './styles'

import { Header } from 'components/Header'
import { Spinner } from 'components/Spinner'
import Main from 'components/Main'
import { ImgsBackground } from 'components/ImgsBackground'

import { useAuth } from 'context/authContext'

const Landing = () => {
  const { loading } = useAuth()
  const [isMidiaMobile, setIsMidiaMobile] = useState(false)

  return (
    <S.Wrapper isActive={isMidiaMobile} activeColor="backgroundDark">
      <Header
        isMidiaMobile={isMidiaMobile}
        setIsMidiaMobile={setIsMidiaMobile}
      />
      <Main />
      <ImgsBackground />
      <S.Footer />
      {loading && <Spinner />}
    </S.Wrapper>
  )
}

export default Landing
