import { ComponentProps } from 'react';
import * as Styles from './styles';

export interface TextInputProps extends ComponentProps<typeof Styles.Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <Styles.Container>
      {!!prefix && <Styles.Prefix>{prefix}</Styles.Prefix>}
      <Styles.Input {...props} />
    </Styles.Container>
  )
}

TextInput.displayName = 'TextInput'
