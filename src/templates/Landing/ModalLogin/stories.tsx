import { Story, Meta } from '@storybook/react/types-6-0'
import ModalLogin from '.'

export default {
  title: 'ModalLogin',
  component: ModalLogin
} as Meta

export const Basic: Story = () => (
  <ModalLogin
    isModalOpen={false}
    onModalClose={function (): void {
      throw new Error('Function not implemented.')
    }}
  />
)
