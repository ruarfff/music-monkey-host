import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts'
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'

const decorate = withStyles(() => ({
  title: {
    fontSize: '20px',
    padding: '10px'
  }
}))

interface IPieChartWidgetProps {
  data: any
}

class PieChartWidget extends React.Component<IPieChartWidgetProps & WithStyles> {

  public render() {
    const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#FFBB28'];

    const { data, classes } = this.props

    return (
      <Paper>
        <Typography className={classes.title}>Guest statistic</Typography>
        <PieChart width={500} height={250}>
          <Pie
            data={data}
            dataKey={'value'}
            innerRadius={60}
            outerRadius={80}
          >
            {data.map((entry:any, index:number) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
          </Pie>
          <Legend verticalAlign='bottom' align='center' height={36}/>
          <Tooltip/>
        </PieChart>
      </Paper>
    )
  }
}

export default decorate(PieChartWidget)