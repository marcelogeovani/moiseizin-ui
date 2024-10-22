import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',

  variants: {
    size: {
      sm: {
        padding: '$3 $4',
      },
      md: {
        padding: '$4',
      }
    }
  },

  defaultVariants: {
    size: 'md',
  }
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
