/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  useState,
  useEffect
} from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

import * as S from './styles'

export type TextFieldProps = {
  placeholder: string
  inputOnChange?: (value: string) => void
  defaultValue?: string
  error?: string
  inputOnFocus?: () => void
  inputOnBlur?: () => void
  label?: string
  isRequired?: boolean
  isPassword?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    placeholder,
    inputOnChange,
    defaultValue,
    error,
    inputOnFocus,
    inputOnBlur,
    label = '',
    isPassword = false,
    isRequired = false,
    ...rest
  },
  ref
) => {
  const [value, setValue] = useState('')
  const [filled, setFilled] = useState(false)
  const [focused, setFocused] = useState(false)

  const [typeState, setType] = useState('text')
  const [isShowPassword, setIsShowPassword] = useState(false)

  function onClickVisibilit() {
    const password = !isShowPassword

    setIsShowPassword(password)

    if (password) return setType('text')

    return setType('password')
  }

  useEffect(() => {
    if (isPassword) {
      setType('password')
    } else {
      setType('text')
    }
  }, [isPassword])

  const handleOnFocus = () => {
    setFocused(true)

    !!inputOnFocus && inputOnFocus()
  }

  const handleOnBlur = () => {
    setFocused(false)
    setFilled(!!value)

    !!inputOnBlur && inputOnBlur()
  }

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)

    !!inputOnChange && inputOnChange(event.currentTarget.value)
  }

  return (
    <S.Wrapper>
      {!!label && (
        <S.Label>
          {label} {isRequired && <span>*</span>}
        </S.Label>
      )}

      <S.WrapperInput filled={filled} focused={focused} error={!!error}>
        <S.Input
          type={typeState}
          placeholder={placeholder}
          onKeyUp={(event) => handleOnChange(event)}
          onFocus={() => handleOnFocus()}
          onBlurCapture={() => handleOnBlur()}
          ref={ref}
          {...!!defaultValue}
          {...rest}
        />
        {isPassword && (
          <S.Password onClick={onClickVisibilit}>
            {isShowPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </S.Password>
        )}
      </S.WrapperInput>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export const TextField = forwardRef(InputBase)
