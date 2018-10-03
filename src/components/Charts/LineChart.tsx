import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'

interface IPieChartWidgetProps {
  data: any
}

class LineChart extends React.Component<IPieChartWidgetProps> {

  public render() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const { data } = this.props

    console.log(data)
    return (
      <Paper>
        <Typography>Guest statistic</Typography>
        <PieChart width={730} height={250}>
          <Pie data={data} dataKey={'value'}>
            {data.map((entry:any, index:number) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
          </Pie>
          <Tooltip/>
        </PieChart>
      </Paper>
    )
  }
}

export default LineChart