import { Story, Meta } from '@storybook/react/types-6-0'
import { Star } from '.'

export default {
  title: 'Star',
  component: Star
} as Meta

export const Basic: Story = () => <Star />
