import { Check } from 'phosphor-react';
import * as Styles from './styles';
import { ComponentProps } from 'react';

export interface CheckboxProps extends ComponentProps<typeof Styles.Container> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <Styles.Container {...props}>
      <Styles.Indicator asChild>
        <Check weight="bold" />
      </Styles.Indicator>
    </Styles.Container>
  )
}

Checkbox.displayName = 'Checkbox'
