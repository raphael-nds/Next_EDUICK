import { Story, Meta } from '@storybook/react/types-6-0'
import { TextField, TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    placeholder: 'input'
  }
} as Meta

export const Basic: Story<TextFieldProps> = (args) => <TextField {...args} />

export const withIconRight: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
)
