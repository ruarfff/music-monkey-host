import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const LoadingSpinner = () => (
  <div style={style.container}>
    <RefreshIndicator
      size={200}
      status="loading"
      style={style.refresh}
    />
  </div>
);

export default LoadingSpinner;