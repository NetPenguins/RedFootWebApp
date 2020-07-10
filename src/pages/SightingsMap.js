import React, {useRef} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import LeafletMap from '../components/Map';
import '../lib/util.js'
import "bulma/css/bulma.css"
import "../styles/main.css"

const SightingsMap = () => {
  const [loading, setLoading] = React.useState(true);
  const [userPos, setUserPos] = React.useState({lat: 35.2271, lng: -80.8431})

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  }else{
    console.log('User location not allowed')
  }

  function getPosition(position) {
    console.log(position)
    setUserPos({lat: position.coords.latitude, lng: position.coords.longitude})
  }

  return (
    <Layout>
      <SEO title="SightingsMap" />
      <Helmet>
        <title>Sightings Map</title>
      </Helmet>
      {typeof window !== 'undefined' &&
        <LeafletMap position={[userPos.lat, userPos.lng]} zoom={13}/>
      }
    </Layout>
  )
}

export default SightingsMap
