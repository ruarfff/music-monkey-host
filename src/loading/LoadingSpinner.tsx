import * as React from 'react'
import ReactLoading from 'react-loading'
import './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div className="LoadingSpinner">
    <ReactLoading type="cylon" color="#fff" />
  </div>
)

export default LoadingSpinner
