import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@moiseizin/react'

const meta = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: '@MoiseizinDev',
    size: 'md',
    as: 'p',
  },
  argTypes: {
    as: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<TextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const CustomTag: Story = {
  args: {
    children: '@MoiseizinDev',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Você pode definir a tag do componente `Text` de acordo com sua necessidade. Basta utilizar a propiedade `as`.',
      },
    },
  },
}
