import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Circle, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import '../styles/main.css'
//import {read} from '../lib/database.js'
//import { geoJSON } from 'leaflet'
import { getFirebase } from "../lib/util";
class LeafletMap extends React.Component {

    constructor(){
        super()
        this.state = {
            Data: [],
            isReady: false,
        };
    }
    
  static propTypes = {
    
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
    }
  

//   static defaultProps = {
//     position: [52, -1],
//     zoom: 13,
//     markerText: "Hello"
//   }

    async componentDidMount(){
       this.readData().then((d) => {
            this.setState({Data: d})
            this.setState({isReady: true})
       })
       
    }
  
    async readData(){
        var abc = []
        return new Promise(function(resolve, reject){
            getFirebase().database().ref('predators/').on("value", function(snapshot) {
                snapshot.forEach(function(childSnapshot){
                    abc.push(childSnapshot.val())
                    return resolve(abc)
                }) 
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
                return reject()
            })
        })
    }
  render() {
    let id = 'mapbox/streets-v11'
    let accessToken = process.env.GATSBY_MAP_API
    if (typeof window !== 'undefined') {
      return (
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/${id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            zIndex={100}
            maxZoom={18}
          />
          {this.state.isReady ? <Points Data={this.state.Data}/> : null}
        </Map>
      );
    }
  }
}

function CreatePoint(data){
    return(
        [
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src={data.img} alt={data.name}/>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-3 has-text-white-ter">
                        {data.name}
                    </p>
                    <p class="subtitle is-6 has-text-grey-lighter">
                        {`@${data.user}`}
                    </p>
                </div>
            </div>
            <p class="content">
                {data.des}
            </p>
            <footer class="cardFoot" id="cardFoot">
                <div class="timeStamp">
                    {new Date(data.time)}
                </div>
            </footer>
        </div>
        ]
    )
} 

const Points = (Data) => {
    let points = []
    if(!Data.Data){
        console.log('returning null')
        return (null)
    }
    for(var a of Data.Data){
        let lt = a.location.split(",")[0]
        let lg = a.location.split(",")[1]
        let timeStamp = new Date(a.time)
        points.push(<Circle center={[lt,lg]} radius={100} color='#eb4034' fillColor='#eb4034' fillOpacity={.55}>
                        <Popup>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-64x64">
                                            <img src={a.img} alt={a.name}/>
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-3 has-text-white-ter">
                                            {a.name}
                                        </p>
                                        <p class="subtitle is-6 has-text-grey-lighter">
                                            {`@${a.user}`}
                                        </p>
                                    </div>
                                </div>
                                <p class="content">
                                    {a.des}
                                </p>
                                <footer class="cardFoot" id="cardFoot">
                                    <div class="timeStamp">
                                        {timeStamp.toTimeString()}
                                    </div>
                                </footer>
                            </div>
                        </Popup>
                    </Circle>)
    }
    return (
        points
    )
}
export default LeafletMap


