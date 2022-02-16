import { Story, Meta } from '@storybook/react'
import { CardProfile, ProfileProps } from '.'

export default {
  title: 'CardProfile',
  component: CardProfile
} as Meta

export const Default: Story<ProfileProps> = (args) => (
  <div style={{ margin: 60 }}>
    <CardProfile {...args} />
  </div>
)
Default.args = {
  nameUser: 'test name user',
  emailUser: 'email@test.com',
  imgUser: '/assets/avatar.svg'
}
