import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

// const markers = [
//   { lat: 40.756795, lng: -73.954298, text: 'Hi', isOpen: false },
//   { lat: 41.76, lng: -72.97, text: 'my', isOpen: true },
//   { lat: 41.44, lng: -73.5, text: 'cool markers!', isOpen: false}
// ]
//







class Map extends Component {

   render() {
     const {locations, onToggleIsOpen} = this.props;
     const MyMap = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
          defaultZoom = { 13 }
        >
        {
          locations.map( l => (
            <Marker
            position={{ lat: l.lat, lng: l.lng }}
            onClick = {(evt) => onToggleIsOpen(l)}
            >
              {l.isOpen &&
                <InfoWindow>
                  <div>
                    <h1>{l.text}</h1>
                  </div>
                </InfoWindow>
              }
            </Marker>
          ))
        }

        </GoogleMap>
     ))
     return(
        <div>
          <MyMap
            containerElement={ <div style={{ height: `100vh`, width: '100%' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
          />
        </div>
     );
   }
};
export default Map;
