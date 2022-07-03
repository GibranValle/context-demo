import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey, purple, red, blue } from '@mui/material/colors';

export const words = {
  en: {
    title: 'useContext hook demo',
    signIn: 'sing in',
    email: 'email:',
    search: 'Search...',
    password: 'password',
    language: 'language',
    remember: 'Remember me',
    forgot: 'Forgot password?',
    signUp: "Don't have an account? Sign Up"
  },
  fr: {
    title: 'useContext hook démonstration',
    signIn: 'Se Conecter',
    email: 'courrier électronique',
    search: 'Chercher...',
    password: 'Mot de Passe',
    language: 'langage',
    remember: 'Souviens-toi de Moi',
    forgot: 'mot de passe oublié?',
    signUp: "Vous n'avez pas de compte ? Inscrivez-vous"
  },
  es: {
    title: 'Demo del useContext hook',
    signIn: 'Ingresar',
    email: 'correo electrónico:',
    password: 'contraseña',
    language: 'idioma',
    search: 'Buscar...',
    remember: 'Recuérdame',
    forgot: '¿Olvidaste tu contraseña?',
    signUp: "¿No tienes una cuenta? Regístrate"
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
      white: grey[50],
      lightgrey: grey[200],
      grey: grey[500],
      purple: purple[500]
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
})