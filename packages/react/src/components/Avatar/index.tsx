import { ComponentProps } from 'react';
import * as Styles from './styles';
import { User } from 'phosphor-react';

export interface AvatarProps extends ComponentProps<typeof Styles.Image> {}

export function Avatar(props: AvatarProps) {
  return (
    <Styles.Container>
      <Styles.Image {...props} />
      <Styles.Fallback delayMs={600}>
          <User />
      </Styles.Fallback>
    </Styles.Container>
  )
}

Avatar.displayName = 'Avatar'
