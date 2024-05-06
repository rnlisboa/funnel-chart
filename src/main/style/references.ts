import { alpha } from '@mui/system'

export const colors = {
  'primary-5': 'rgba(128, 7, 151, 0.1)',
  'primary-4': 'rgba(128, 7, 151, 0.2)',
  'primary-3': 'rgba(128, 7, 151, 0.4)',
  'primary-2': 'rgba(128, 7, 151, 0.6)',
  'primary-1': '#A526BD',
  primary: '#800797',
  'primary+1': '#5E0070',
  'primary+2': '#EDE2f5',
  'secondary-1': '#FF2692',
  secondary: '#EF0077',
  'secondary+1': '#C90064',
  'secondary+2': '#D94B8D',
  'light-1': '#F8FAFF',
  light: '#FFFFFF',
  'light+1': '#EDE8E8',
  'light+2': '#F1F5FE',
  lightBlue: '#044AB2',
  dark: '#050B41',
  'dark+1': '#01031A',
  success: '#00AE12',
  'success+1': '#6AA855',
  'disabled-1': '#D4D4D4',
  error: '#FF0000',
  'error-rgb': [255, 0, 0],
  disabled: '#AAA9A9',
  'disabled+1': '#857D7D',
  red: '#E4BCBC',
  blue: '#BCD3E4',
  navyBlue: '#0D74EE',
  attentionRed: '#CC3333',
  'attentionRed-1': '#E5B0B0',
  yellowGold: '#FFCF26',
  orange: '#E57B19',
  yellowBck: 'rgba(255, 208, 41, 0.20)',
  brownTxt: '#B85B29',
  greenBck: 'rgba(41, 172, 54, 0.20)',
  greenTxt: '#02750E',
  blueBck: 'rgba(13, 116, 238, 0.20)',
  blueTxt: '#0D74EE',
  orangeBck: 'rgba(245, 90, 7, 0.20)',
  orangeTxt: '#DA6900',
  redBck: 'rgba(204, 51, 51, 0.20)',
  redTxt: '#CC3333',
  grayBck: '#D9D9D9',
  grayTxt: '#716D6D'
}

export type ColorPalette = typeof colors
export type Color = keyof ColorPalette
export const pickColor = (color: Color, opacity = 1): string => {
  const value = colors[color] ?? colors['light']

  return Array.isArray(value)
    ? `rgb${value.length > 3 ? 'a' : ''}(${value.join(', ')})`
    : value.charAt(0) === '#'
    ? alpha(value, opacity)
    : value
}

export const fonts = {
  family: {
    YaroCut: "'YaroCut', sans-serif",
    Montserrat: "'Montserrat', sans-serif",
    YaroBig: "'YaroBig', sans-serif"
  },

  size: {
    h1: '48px',
    h2: '39px',
    h3: '33px',
    h4: '28px',
    h5: '23px',
    h6: '19px',
    p: '16px',
    higherSmall: '14px',
    small: '12px',
    superSmall: '10px'
  },

  weight: {
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  }
}

export type FontPalette = typeof fonts

export type FontFamilyPalette = typeof fonts.family
export type FontFamilyOptions = keyof FontFamilyPalette

export type FontSizePalette = typeof fonts.size
export type FontSizeOptions = keyof FontSizePalette

export type FontWeightPalette = typeof fonts.weight
export type FontWeightOptions = keyof FontWeightPalette

export const breakpoints = {
  smallest: '(max-width: 320px)',
  smaller: '(max-width: 420px)',
  small: '(max-width: 576px)',
  medium: '(max-width: 780px)',
  regular: '(max-with: 900px)',
  large: '(max-with: 1080px)',
  larger: '(max-width: 1500px)',
  largest: '(min-with: 1501px)',
  iPadPro: '(max-height: 1366px) and (max-width: 1024px)',
  iPadAir: '(max-height: 1180px) and (max-width: 820px)',
  iPadMini: '(max-height: 1024px) and (max-width: 768px)'
}

export type Breakpoint = typeof breakpoints
export type BreakpointOption = keyof Breakpoint
export type PropsByBreakpoint<P> = Partial<Record<BreakpointOption, Partial<P>>>

export const modal = {
  size: {
    width: '520',
    height: '312'
  }
}
