export default {
  colors: {
    background: '#fff',
    darkBackground: '#1C1D23',
    text: {
      onBackground: '#1C1D23',
      onDarkSubHeading: '#A4A5A7',
      onDarkBody: '#666666'
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
      grayLight: '#E1E1E1'
    }
  },
  fontFamily: 'Urbanist',
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '32px'
  },
  fontWeight: {
    light: '400',
    medium: '500',
    bold: '700'
  },
  space: {
    xs: '2px',
    sm: '4px',
    base: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  borderRadius: {
    sm: '4px',
    base: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    full: '9999px'
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
