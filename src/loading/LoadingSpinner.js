import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div>
    <CircularProgress size={400} thickness={5} />
  </div>
)

export default LoadingSpinner
