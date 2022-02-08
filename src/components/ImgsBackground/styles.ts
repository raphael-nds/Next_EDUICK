import styled from 'styled-components'

export const ContainerImage = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;

  img {
    height: 50%;
    max-height: 600px;
  }

  justify-content: space-between;

  @media (max-width: 1020px) {
    margin: 0 auto;
    margin-top: 600px;
  }

  @media (min-width: 1020px) {
    display: flex;
    width: 90%;
    margin: 0 auto;

    justify-content: space-between;

    img {
      height: 60%;
      max-height: 800px;
    }

    .assets-left,
    .assets-right {
      max-width: 40%;
      margin-top: 200px;
    }

    .assets-right {
      margin-right: -300px;
    }
  }

  @media (min-width: 1770px) {
    width: 90%;
    img {
      height: 60%;
      max-height: 800px;
    }
  }

  .assets-left {
    @media (max-width: 1020px) {
      display: flex;
      width: 100%;
      max-width: 60%;

      margin: 0 auto;
    }
  }
  .assets-right {
    display: flex;
    position: relative;
    right: 0;
    top: -250px;

    @media (max-width: 1020px) {
      display: none;
    }
  }
`
