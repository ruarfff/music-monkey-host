import CircularProgress from 'material-ui/Progress/CircularProgress';
import * as React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div className="LoadingSpinner">
    <CircularProgress size={400} thickness={7} />
  </div>
)

export default LoadingSpinner
