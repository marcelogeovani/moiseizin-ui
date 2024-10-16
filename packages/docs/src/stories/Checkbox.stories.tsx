import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@moiseizin/react'

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
        <Text size="sm">Label boladona</Text>
      </Box>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<CheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
