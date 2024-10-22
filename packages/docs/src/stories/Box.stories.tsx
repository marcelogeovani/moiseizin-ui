import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@moiseizin/react'

const meta = {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: <Text>Box</Text>,
    as: 'div',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    as: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'O componente `Box` não tem altura nem largura definida, você pode definir esses valores de acordo com sua necessidade. <br /> Por padrão o `Box` assume o elemento `div`, mas você pode criar elementos semânticos utilizando o `Box` basta passar o nome do elemento na propriedade `as`.',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<BoxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Secondary: Story = {
  args: {
    size: 'sm',
  },
}
