import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@moiseizin/react'

const meta = {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: 'Tooltip'
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<TooltipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
