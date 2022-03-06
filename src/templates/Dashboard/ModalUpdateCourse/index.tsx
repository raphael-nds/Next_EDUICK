import { TextField } from 'components/TextField'
import Modal from 'react-modal'
import { DataCourses } from '../index'

import * as S from './styles'

Modal.setAppElement('#__next')

type Props = {
  isModalOpen: boolean
  OnModalClose: () => void
  handleClickArgs?: DataCourses
}

export const ModalUpdateCourse = ({
  isModalOpen,
  OnModalClose,
  handleClickArgs
}: Props) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={OnModalClose}
      contentLabel="Example Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Wrapper>
        <button
          type="button"
          onClick={OnModalClose}
          className="react-modal-close"
        >
          close
        </button>
        <TextField label="Image: " placeholder="" />
        <TextField label="Título: " placeholder="" />
        <TextField label="Star: " placeholder="" />
        <TextField label="Total Lessons: " placeholder="" />
      </S.Wrapper>
    </Modal>
  )
}
