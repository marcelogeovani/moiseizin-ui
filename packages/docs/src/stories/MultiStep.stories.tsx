import type { Meta, StoryObj } from '@storybook/react'
import { MultiStep, MultiStepProps } from '@moiseizin/react'

const meta = {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<MultiStepProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
