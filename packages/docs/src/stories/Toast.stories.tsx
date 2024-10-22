import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@moiseizin/react'

const meta = {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    children: 'Description Toast',
    title: 'Toast',
    onClose: () => {},
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<ToastProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
