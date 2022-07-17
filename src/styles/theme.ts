export default {
  colors: {
    background: '#fff',
    darkBackground: '#1C1D23',
    text: {
      onBackground: '#1C1D23',
      onDarkSubHeading: '#A4A5A7',
      onDarkBody: '#666666',
    },
    primary: {
      brand: '#549B3B',
      100: '',
      90: '',
      80: '',
      50: '',
      20: '',
      10: ''
    },
    secondary: {
      brand: '',
      100: '',
      90: '',
      80: '',
      50: '#7EBC43',
      20: '',
      10: ''
    },
    semantic: {
      up: '#549B3B',
      down: '#DE4238',
      success: '#2F9E51',
      warning: '#EED86F',
      error: '#DE4238'
    },
    neutral: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#A4A5A7',
      grayLight: '#E1E1E1',
    }
  },
  fontFamily: 'Urbanist',
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  fontWeight: {
    light: 400,
    medium: 500,
    bold: 700
  },
  space: {
    xs: 2,
    sm: 4,
    base: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    base: 8,
    md: 16,
    lg: 24,
    xl: 32,
    full: 9999
  },
  shadow: {
    sm: 'box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const

