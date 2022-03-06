import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Modal from 'react-modal'

import { AiOutlineClose } from 'react-icons/ai'
import * as S from './styles'

import { Button } from 'components/Button'
import { TextField } from 'components/TextField'
import { Title } from 'components/Title'

import { useAuth } from 'context/authContext'
import { Spinner } from 'components/Spinner'

Modal.setAppElement('#__next')

type Props = {
  isModalOpen: boolean
  onModalClose: () => void
}

type SignIN = {
  email: string
  password: string
}

// VALIDAR CAMPOS
const schema = yup.object().shape({
  email: yup.string().email().required('Digite um e-mail válido'),
  password: yup.string().required('Digite uma senha válida')
})

const ModalLogin = ({ isModalOpen, onModalClose }: Props) => {
  const { signIn, loading, setLoading } = useAuth()
  console.log(loading)
  const delay = (amount = 5000) =>
    new Promise((resolve) => setTimeout(resolve, amount))

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignIN>({ resolver: yupResolver(schema) })

  // SUBMIT DO FORMULARIO MODAL LOGIN
  const onRequestSignIn: SubmitHandler<SignIN> = async (values) => {
    setLoading(true)

    await delay()
    await signIn({
      email: values.email,
      password: values.password
    })
      .then(() => {
        onModalClose()
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onModalClose}
      contentLabel="Example Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Wrapper>
        <Title />
        <button
          type="button"
          onClick={onModalClose}
          className="react-modal-close"
        >
          <AiOutlineClose />
        </button>
        <S.Container onSubmit={handleSubmit(onRequestSignIn)}>
          <TextField
            label="email:"
            placeholder="email"
            error={errors?.email?.message}
            {...register('email')}
          />
          <TextField
            label="password:"
            placeholder="password"
            isPassword={true}
            error={errors?.password?.message}
            {...register('password')}
          />
          <div className="btn">
            <Button type="submit">Login</Button>
          </div>
        </S.Container>
      </S.Wrapper>

      {loading && <Spinner />}
    </Modal>
  )
}

export default ModalLogin
