import { ComponentProps, forwardRef, ElementRef } from 'react';
import * as Styles from './styles';

export interface TextInputProps extends Omit<ComponentProps<typeof Styles.Input>, 'size'> {
  prefix?: string
  containerProps?: ComponentProps<typeof Styles.Container>
  size?: 'sm' | 'md'
}

export const TextInput = forwardRef<ElementRef<typeof Styles.Input>, TextInputProps>(
  ({ prefix, size, ...props }: TextInputProps, ref) => {
    return (
      <Styles.Container size={size}>
        {!!prefix && <Styles.Prefix>{prefix}</Styles.Prefix>}
        <Styles.Input ref={ref} {...props} />
      </Styles.Container>
    )
  }
)

TextInput.displayName = 'TextInput'
