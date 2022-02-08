import { Story, Meta } from '@storybook/react/types-6-0'
import { Items, Props } from '.'

export default {
  title: 'Items',
  component: Items,
  args: {
    img: 'https://media.istockphoto.com/photos/reading-with-my-teacher-picture-id1295820320?s=612x612',
    title: 'Master Espanhol: So os lacucarachas',
    star: 4,
    totalLessons: 5
  }
} as Meta

export const Basic: Story<Props> = (args) => <Items {...args} />
