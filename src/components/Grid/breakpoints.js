const screenSize = {
  xs: 0,
  sm: 328,
  md: 600,
  lg: 1100,
  xl: 1332
}

const device = {
  mobile: `(min-width: ${screenSize.sm}px)`,
  tablet: `(min-width: ${screenSize.md}px)`,
  desktop: `(min-width: ${screenSize.lg}px)`,
  desktopLarge: `(min-width: ${screenSize.xl}px)`
}

export {
  device,
  screenSize
}
