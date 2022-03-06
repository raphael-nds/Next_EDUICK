import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;

  //background: yellow;

  > ul {
    display: flex;
    list-style: none;
    align-items: center;

    > li {
      align-items: center;

      > button.itemActive {
        width: 30px;
        height: 30px;

        margin: 0 10px;

        border: none;
        border-radius: 50%;
        background: purple;
      }
    }
  }
`
