import Grid from '@material-ui/core/Grid'
import { Theme, WithStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography/Typography'
import * as React from 'react'

const decorate = withStyles((theme: Theme) => ({
  stepsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#979797',
    padding: '0 15px',
    marginBottom: '20px',
  },
  highlight: {
    color: '#F79022',
  }
}))

type ICreateEventStepsClasses =
  'stepsContainer' |
  'highlight'

interface ICreateEventStepsProps {
  step: number,
}

export default decorate(
  class EventCard extends React.Component<
    ICreateEventStepsProps &
    WithStyles<ICreateEventStepsClasses>
    > {
    public render() {
      const { step, classes } = this.props

      return (
        <Grid
          container={true}
          spacing={24}
          justify="center"
          alignItems="center"
          direction="row"
          className={classes.stepsContainer}
        >
          <Typography className={step === 0 ? classes.highlight : ''}>
            STEP 1: CREATE EVENT
          </Typography>
          <Typography className={step === 1 ? classes.highlight : ''}>
            STEP 2: ADD DETAILS
          </Typography>
          <Typography className={step === 2 ? classes.highlight : ''}>
            STEP 3: SHARE EVENT
          </Typography>
        </Grid>
      )
    }
  })
