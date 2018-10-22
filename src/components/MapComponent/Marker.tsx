import * as React from 'react'
import './MapComponent.scss'
import mapMarker from '../../assets/location-marker-icon.svg'

interface IMapComponentProps {
  lat: number,
  lng: number
}

const MapComponent: React.SFC<IMapComponentProps> = props => {
  return (
    <div>
      <img src={mapMarker} />
    </div>
  )
}

export default MapComponent
