import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@moiseizin/react'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: '@MoiseizinDev',
    size: 'md',
    as: 'h2',
  },
  argTypes: {
    as: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<HeadingProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
