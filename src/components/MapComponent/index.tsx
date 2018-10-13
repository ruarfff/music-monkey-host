import GoogleMapReact from 'google-map-react'
import * as React from 'react'
import { ILatLng } from '../location/ILocation'
import './MapComponent.css'

interface IMapComponentProps {
  coords?: ILatLng
}

const MapComponent: React.SFC<IMapComponentProps> = props => {
  const { coords } = props
  return (
    <div className="map-wrapper">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAW6WugUsDtlV9lImEB6cE5PtZqPtKSM3o' }}
        center={coords}
        defaultZoom={18}
      />
    </div>
  )
}

export default MapComponent
