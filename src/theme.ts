import { PaletteOptions } from '@material-ui/core/es/styles/createPalette'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f3f3f3'
    },
    primary: {
      main: '#F79022'
    }
  } as PaletteOptions,
  typography: {
    useNextVariants: true
  }
})

export default theme
