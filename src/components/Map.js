import React from 'react'
import PropTypes, { func } from 'prop-types'
import { Map, TileLayer, Circle, Popup } from 'react-leaflet'
import UserMenu from './UserMenu'
import { readData } from '../lib/database'
import { Link } from 'gatsby'
import "leaflet/dist/leaflet.css"
import '../styles/main.css'
import { Sidebar, Tab } from 'react-leaflet-sidetabs'
import Drawer from '../components/Drawer'
import {
    Button,
    Snackbar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { FiHome, FiChevronRight, FiPlusSquare, FiSettings, FiLogIn } from "react-icons/fi";
import '../styles/mapmenu.css'


export default class LeafletMap extends React.Component {

    constructor(){
        super()
        this.state = {
            Data: [],
            isReady: false,
            collapsed: true,
            selected: 'home',
            mapType: 'mapbox/streets-v11',
            snackOpen: false,
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

    async componentDidMount(){
       readData().then((d) => {
            this.setState({Data: d})
            this.setState({isReady: true})
       }).catch((err) => {
           console.log("HERE   " + err)
       })
    }
    onClose() {
        this.setState({collapsed: true});
    }

    onOpen(id) {
            this.setState({
                collapsed: false,
                selected: id,
            })
    }

    mapChoice(id){
        this.setState({
            mapType: id
        })
        this.onClose()
    }

    
    
  render() {
    let id = this.state.mapType
    let accessToken = process.env.GATSBY_MAP_API
    if (typeof window !== 'undefined') {
      return (
        <div>
            <Map className='LeafletMap' center={this.props.position} zoom={this.props.zoom}>
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/${id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                zIndex={100}
                maxZoom={18}
            />
            {this.state.Data.length !== 0 && this.state.isReady && <Points Data={this.state.Data}></Points>}
            </Map>
            {/* <Sidebar
                id="sidebar"
                position="right"
                collapsed={this.state.collapsed}
                closeIcon={<FiChevronRight />}
                selected={this.state.selected}
                onOpen={this.onOpen.bind(this)}
                onClose={this.onClose.bind(this)}
            >
           <Tab id="home" header="Home" icon={<FiHome />}>
                <div id="#mapNav">
                    <Link to="/">Home</Link>
                    <Link to='/About'>About</Link>
                    <UserMenu/>
                </div>
           </Tab>
           <Tab id="add" header="Add Sighting" icon={<FiPlusSquare />}>
            <p>Addition funcitionality will be housed here!</p>
            <Button 
                color="primary"
                endIcon={<FiPlusSquare/>}
                onClick={() => this.onSnackOpen()}
            >
                Add Sighting
            </Button>
            
           </Tab>
           <Tab id="settings" header="Settings" anchor="bottom" icon={<FiSettings />}>
            <a onClick={() => this.mapChoice('mapbox/dark-v10')}>
                <img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01810f9a5b1c55841ee6f_ipad-map%20dark-p-800.png" alt="darkmap"></img>
            </a>
            <a onClick={() => this.mapChoice('mapbox/streets-v11')}>
                <img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01b977fb48a501b898a93_ipad-map%20streets.png" alt="streetsmap"></img>
            </a>
            <a onClick={() => this.mapChoice('mapbox/outdoors-v11')}>
                <img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01bd0779fa266f900ba3c_ipad-map%20outdoors-p-800.png" alt="terrainmap"></img>
            </a>
            <a onClick={() => this.mapChoice('mapbox/satellite-streets-v11')}>
                <img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea01c39578be545290d4aae_ipad-map%20satellite-p-800.png" alt="satellitemap"></img>
            </a>
            <a onClick={() => this.mapChoice('mapbox/light-v10')}>
                <img src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5ea012c7779fa2ca49008383_ipad-map.png" alt="lightmap"></img>
            </a>
           </Tab>           
        </Sidebar> */}
        </div>
      );
    }
  }
}

// function CreatePoint(data){
//     return(
//         [
//         <div className="card-content">
//             <div className="media">
//                 <div className="media-left">
//                     <figure className="image is-64x64">
//                         <img src={data.img} alt={data.name}/>
//                     </figure>
//                 </div>
//                 <div className="media-content">
//                     <p className="title is-3 has-text-white-ter">
//                         {data.name}
//                     </p>
//                     <p className="subtitle is-6 has-text-grey-lighter">
//                         {`@${data.user}`}
//                     </p>
//                 </div>
//             </div>
//             <p className="content">
//                 {data.des}
//             </p>
//             <footer className="cardFoot" id="cardFoot">
//                 <div className="timeStamp">
//                     {new Date(data.time)}
//                 </div>
//             </footer>
//         </div>
//         ]
//     )
// } 

class Points extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            points: []
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.value != nextState.value;
    }
    render(){
        console.log('loaded data')
        if(!this.props.Data){
            console.log('returning null')
            return (null)
        }
        for(var a of this.props.Data){
            let lt = a.location.split(",")[0]
            let lg = a.location.split(",")[1]
            let timeStamp = new Date(a.time)
            this.state.points.push(<Circle center={[lt,lg]} radius={100} color='#eb4034' fillColor='#eb4034' fillOpacity={.55}>
                            <Popup>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-64x64">
                                                <img src={a.img} alt={a.name}/>
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-3 has-text-white-ter">
                                                {a.name}
                                            </p>
                                            <p className="subtitle is-6 has-text-grey-lighter">
                                                {`@${a.user}`}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="content">
                                        {a.des}
                                    </p>
                                    <footer className="cardFoot" id="cardFoot">
                                        <div className="timeStamp">
                                            {timeStamp.toTimeString()}
                                        </div>
                                    </footer>
                                </div>
                            </Popup>
                        </Circle>)
        }
        return (
            this.state.points
        )
    }
}



