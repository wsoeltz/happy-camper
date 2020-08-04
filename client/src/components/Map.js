import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  Map as LeafletMap,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet setup for proper styling
// https://stackoverflow.com/questions/40365440/react-leaflet-map-not-correctly-displayed
Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
// End Leaflet setup

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  .leaflet-container {
    width: 100vw;
    height: 100vh;
  }
`;

const Map = ({data}) => {
  let output;
  if (data !== undefined) {
    // plot the campgrounds on the Leaflet map with their lat/lng coordinates
    const campgrounds = data.campgrounds.map(({id, name, lat, lng}) => {
      return (
        <Marker position={[lat, lng]} key={'marker-' + id + lat + lng}>
          <Popup>
            <Link to={`/campground/${id}`}><strong>{name}</strong></Link>
          </Popup>
        </Marker>
      );
    })
    output = (
      <>
        {campgrounds}
      </>
    )
  } else {
    output = null;
  }

  return (
    <Root>
      <LeafletMap center={[42.5, -73]} zoom={9}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {output}
      </LeafletMap>
    </Root>
  );
}

export default Map;
