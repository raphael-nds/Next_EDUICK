import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Container = styled.form`
  display: grid;
  gap: 20px;

  > div.btn {
    display: flex;
    width: 100%;

    @media (min-width: 576px) {
      padding-left: 60%;
    }
  }
`
