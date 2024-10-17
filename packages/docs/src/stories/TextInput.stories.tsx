import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@moiseizin/react'

const meta = {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    disabled: false,
  },
  argTypes: {
    onChange: {
      action: 'change',
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
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Label boladona</Text>
        {Story()}
      </Box>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<TextInputProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: 'Digita aê',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: 'R$',
    placeholder: '1200,00'
  },
}
