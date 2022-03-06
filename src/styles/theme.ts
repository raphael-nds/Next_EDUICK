export default {
  grid: {
    container: '136.6rem',
    gutter: '1.6rem'
  },
  border: {
    radius: {
      lg: '2.4rem',
      md: '0.6rem',
      sm: '0.4rem'
    }
  },
  font: {
    family: '"Poppins", sans-serif;',
    sizes: {
      lg: '2.8rem',
      xmd: '1.8rem',
      md: '1.6rem',
      xsm: '1.4rem',
      sm: '1.2rem'
    }
  },
  colors: {
    main: {
      white: 'rgba(255, 255, 255, 1)',
      yellowOpacity: 'rgba(255, 215, 79, 0.8)',
      yellow: 'rgba(255, 215, 79, 1)',
      purple: 'rgba(121, 85, 232, 1)',
      background: '#9871f5',
      backgroundDark: 'rgba(32, 14, 100, 1)'
    },
    alerts: {
      red: '#FF6B6B',
      lightRed: '#FFE9E7',
      yellow: '#FECA57',
      lightYellow: '#FFFAE4',
      green: '#1DD1A1',
      lightGreen: '#DEFFF6'
    },
    personalization: {
      lightGreen: '#B8E994',
      green: '#6DC981',
      purple: '#706FD3',
      cyan: '#6A89CC',
      lightBlue: '#82CCDD',
      yellow: '#FAD390',
      orange: '#FF7C32',
      red: '#E55039'
    }
  },
  spacings: {
    xxsm: '0.8rem',
    xsm: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    xmd: '3.6rem',
    lg: '4.0rem',
    xlg: '4.8rem',
    xxlg: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  shadows: {
    modal:
      '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
    contentSelect:
      '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
    button: '0px 10px 14px -6px rgba(14, 46, 89, 0.2)'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
