import { ComponentProps, forwardRef, ElementRef } from 'react'
import * as Styles from './styles';

export interface TextInputProps extends ComponentProps<typeof Styles.Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Styles.Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <Styles.Container>
        {!!prefix && <Styles.Prefix>{prefix}</Styles.Prefix>}
        <Styles.Input ref={ref} {...props} />
      </Styles.Container>
    )
  }
)

TextInput.displayName = 'TextInput'
