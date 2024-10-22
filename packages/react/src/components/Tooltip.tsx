import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Tooltip = styled('div', {
  fontFamily: '$default',
  textAlign: 'center',
  lineHeight: '$short',
  color: '$gray100',
  fontSize: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  boxShadow: '0 0 0 2px $colors$gray100',
  position: 'relative',
  padding: '$3 $4',
  boxSizing: 'border-box',
  maxWidth: '$64',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent', /* Cor da seta, ajustada para um triângulo */
  }
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {
  as?: ElementType
}

Tooltip.displayName = 'Tooltip'
