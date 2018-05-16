import * as React from 'react'
import ReactLoading from 'react-loading'
import './LoadingSpinner.css'

const LoadingSpinner = () => (
  <div className="LoadingSpinner">
    <ReactLoading type="cylon" color="#455A64" height={400} width={400} />
  </div>
)

export default LoadingSpinner
