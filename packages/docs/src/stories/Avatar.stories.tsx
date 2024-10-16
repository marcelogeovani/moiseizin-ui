import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@moiseizin/react'

const meta = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/moisessantana.png',
    alt: 'Moiséizin Dev',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
