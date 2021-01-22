import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1275ae',
    },
    secondary: {
      main: '#12ae99',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
