import * as S from './styles'

import { Title } from 'components/Title'
import { Button } from 'components/Button'
import { Radio } from 'components/Radio'
import { TextField } from 'components/TextField'

const options = [
  { value: '1', label: "I'M A TEACHER" },
  { value: '2', label: "I'M A STUDENT" }
]

const Main = () => {
  return (
    <S.Wrapper>
      <S.Section>
        <Title />

        <div className="typography">
          <span>
            Whether you are a student trying to find your ideal private language
            teachers/tutors or a teacher trying to find great students for your
            customised private lessons!
          </span>
        </div>

        <div className="container-input-btn">
          <TextField placeholder="Type here what are you looking for" />
          <div className="btn">
            <Radio defaultValue={'1'} options={options} />
          </div>
          <Button>Search</Button>
        </div>
      </S.Section>
    </S.Wrapper>
  )
}

export default Main
