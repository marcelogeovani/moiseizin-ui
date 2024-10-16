import { createStitches, defaultThemeMap } from '@stitches/react'
import * as themeConfig from '@moiseizin/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
    maxHeight: 'space',
    maxWidth: 'space',
  },
  theme: { ...themeConfig },
})
