import { useState } from 'react'
import * as S from './styles'

type Options = {
  label: string
  value: string
}
type Props = {
  defaultValue?: string
  options: Options[]
}

export const Radio = ({ defaultValue = '', options, ...rest }: Props) => {
  const [checked, setChecked] = useState(defaultValue)

  return (
    <S.Wrapper>
      {options?.map((item) => (
        <S.WrapperMapOption
          key={item.value}
          type="button"
          isChecked={checked === item.value}
        >
          <label htmlFor={item.value}>
            <input
              defaultChecked={item.value === defaultValue}
              value={item.value}
              type="radio"
              id={item.value}
              checked={checked === item.value}
              onChange={(e) => setChecked(e.target.value)}
              {...rest}
            />
            <S.Container>
              <S.Checked />
              <span>{item.label}</span>
            </S.Container>
          </label>
        </S.WrapperMapOption>
      ))}
    </S.Wrapper>
  )
}
