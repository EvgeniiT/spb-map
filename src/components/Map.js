import React, { Component } from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMap = compose(
  lifecycle({
    componentDidCatch(error, info) {
      console.log(error, info);
    }
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhvEsTlzkQOtJQCfJa0D2kJ96a1LcNnLU",
    loadingElement: <div style={{ height: `90vh` }} />,
    containerElement: <div style={{ height: `90vh`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>

  <GoogleMap
    defaultCenter = { { lat: 40.712775, lng: -74.005973 } }
    defaultZoom = { 13 }
  >
  {
    props.locations.map( l => (
      <Marker
        key = {l.id}
        position = {{ lat: l.lat, lng: l.lng }}
        icon = {l.icon}
        onClick = {() => props.onToggleIsOpen(l)}
      >
        {l.isOpen &&
          <InfoWindow
            onCloseClick = {evt => props.onToggleIsOpen(l)}
          >
            <div className='Info-Window-Content'>
              <h1>{l.text}</h1>
            </div>
          </InfoWindow>
        }
      </Marker>
    ))
  }
  </GoogleMap>

)

class Map extends Component {

  render() {
    const {locations, onToggleIsOpen} = this.props;
    return (
      <div
        aria-hidden = 'true'
        style={{ height: 350,
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        padding: 0 }}
      >
        <MyMap
          locations = {locations}
          onToggleIsOpen = {onToggleIsOpen}
        />
      </div>
    )
  }
}

export default Map;
