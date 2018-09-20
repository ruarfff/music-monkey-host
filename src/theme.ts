import { createMuiTheme } from '@material-ui/core/styles'
import { PaletteOptions } from '@material-ui/core/es/styles/createPalette'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#f3f3f3',
    },
    primary: {
      main: '#F79022',
    },
  } as PaletteOptions,
})

export default theme
