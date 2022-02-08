import { useState } from 'react'
import Link from 'next/link'

import { HiOutlineMenuAlt1 } from 'react-icons/hi'

import ModalLogin from 'templates/Landing/ModalLogin'
import { Button } from 'components/Button'
import { Logo } from 'components/Logo'

import * as S from './styles'

type MidiaMobile = {
  isMidiaMobile: boolean
  setIsMidiaMobile: (args: boolean) => void
}

export const Header = ({ isMidiaMobile, setIsMidiaMobile }: MidiaMobile) => {
  const [modalLogin, setModalLogin] = useState(false)

  function handleClickModalOpen() {
    setModalLogin(true)
  }
  function handleClickModalClose() {
    setModalLogin(false)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderMobile>
          <button
            className="menu-icon"
            onClick={() => setIsMidiaMobile(!isMidiaMobile)}
          >
            <HiOutlineMenuAlt1 />
          </button>
          <Logo />
          {isMidiaMobile && (
            <ul className="navBarMobile">
              <Link href="#">How it works</Link>
              <Link href="#">About Us</Link>
              <li>
                <button
                  className="btnGetStarted"
                  onClick={handleClickModalOpen}
                >
                  Get Started
                </button>
              </li>
            </ul>
          )}
        </S.HeaderMobile>
        <S.HeaderDesktop>
          <Logo />
          <ul className="navBar">
            <div>
              <li>How it works</li>
              <li>About Us</li>
            </div>
            <Button onClick={handleClickModalOpen}>Get Started</Button>
          </ul>
        </S.HeaderDesktop>
      </S.Header>

      {/* MODAL LOGIN */}
      <ModalLogin
        isModalOpen={modalLogin}
        onModalClose={handleClickModalClose}
      />
    </S.Wrapper>
  )
}
