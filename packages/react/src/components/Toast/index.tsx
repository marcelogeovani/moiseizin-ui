import { ReactNode, useEffect } from 'react';
import * as Styles from './styles';
import { Box } from '../Box';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { X } from 'phosphor-react';

export interface ToastProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
  duration?: number;
  position?: 'tr' | 'tl' | 'br' | 'bl';
}

export function Toast({ title, duration = 3000, children, onClose, position = 'br' }: ToastProps) {
  const positionStyle = {
    tr: { top: '10px', right: '10px' },
    tl: { top: '10px', left: '10px' },
    br: { bottom: '10px', right: '10px' },
    bl: { bottom: '10px', left: '10px' },
  }
  
  useEffect(() => {
    const timeout = setTimeout(onClose, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  return (
    <Box size='sm' css={{ position: 'fixed', ...positionStyle[position], width: '22.5rem' }}>
      <Styles.Header>
        <Heading size='md'>{title}</Heading>
        <X onClick={onClose} />
      </Styles.Header>
      <Text size='sm' css={{ color: '$gray200' }}>{children}</Text>
    </Box>
  )
}

Toast.displayName = 'Toast'
