import React, {useRef} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import LeafletMap from '../components/Map';
import '../lib/util.js'
import "bulma/css/bulma.css"
import "../components/main.css"
const LOCATION = {
  lat: 38.9072,
  lng: -77.0369
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;
const ZOOM = 10;

const timeToZoom = 2000;
const timeToOpenPopupAfterZoom = 4000;
const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000;

const popupContentHello = `<p>Hello 👋</p>`;
const popupContentGatsby = `
  <div class="popup-gatsby">
    <div class="popup-gatsby-content">
      <h1>Gatsby Leaflet Starter</h1>
      <p>Welcome to your new Gatsby site. Now go build something great!</p>
    </div>
  </div>
`;

const SightingsMap = () => {
  return (
    
    <Layout>
      <SEO title="SightingsMap" />
      <Helmet>
        <title>Sightings Map</title>
      </Helmet>
      
      {/* <div className="map">
      </div> */}
      {typeof window !== 'undefined' &&
        <LeafletMap/>
      }
    </Layout>
  )
}

export default SightingsMap
