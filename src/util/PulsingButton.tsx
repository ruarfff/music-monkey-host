import Button, { ButtonProps } from '@material-ui/core/Button/Button'
import * as React from 'react'
import './PulsingButton.css'

const PulsingButton: React.SFC<ButtonProps> = (props: any) => (
  <div className="PulsingButton-container">
    <Button className="PulsingButton-button" {...props}>
      Start Now
    </Button>
  </div>
)

export default PulsingButton
