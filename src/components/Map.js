import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Circle, Popup } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import './main.css'

class LeafletMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [51, -1],
    zoom: 13,
    markerText: "Hello"
  }

  
  render() {
    if (typeof window !== 'undefined') {
      return (
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.markerText !== "" &&
          <Circle center={this.props.position} radius={200} color='#eb4034' fillColor='#eb4034' fillOpacity={.55}>
            <Popup>{this.props.markerText}</Popup>
          </Circle>
          }
        </Map>
      );
    }
  }
}

export default LeafletMap


