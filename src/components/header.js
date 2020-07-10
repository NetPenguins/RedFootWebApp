//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, } from "react"
import "../styles/main.css"
import "bulma/css/bulma.css"
import "../lib/util.js"
import { getFirebase, getUser } from "../lib/util.js"
//import {Link} from "gatsby"
import {NavbarLinks} from "./NavbarLinks"
import Login from "../pages/Login"
import Logout from "../components/logout"
import SightingsMap from "../pages/SightingsMap"
//Create a basic header that is reactive.
const Header = ({ siteTitle }) => {
  const [isActive, setisActive] = React.useState(false);
  const [user, setUser] = React.useState(false)
  let firebase = getFirebase()
  
  useEffect(() => {
    if (!firebase) return;
    return firebase.auth().onAuthStateChanged((user) => {
      console.log('User:', user);
      setUser(user ? true : false)
    });
   }, [firebase]);
  return(
  <>

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
  <link rel="manifest" href="/site.webmanifest"/>
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
  <meta name="msapplication-TileColor" content="#da532c"/>
  <meta name="theme-color" content="#ffffff"/>
    <header className="navbar" role="navigation">
      {/* <nav className="navbar navbar-brand" role="navigation" aria-label="main navigation"> */}
        <div className="navbar-brand">
          <a class="image is-48x48">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
          </a>
          <a
            onClick={() => { //create handle for burger drop down on mobile
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger is-black ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
            <div className="navbar-start" id="navbar">
              {/* <a className="Block__LinkButton" href="/">Home</a>
              <a className="Block__LinkButton" href="/About/">About</a>
              <a className="Block__LinkButton" href="/SightingsMap/">Sightings</a> */}
              {/* <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/SightingsMap">Sightings</Link> */}
              <NavbarLinks/>
              {user ? <Logout/> : <Login/>}
            </div>
        </div>
      {/* </nav> */}
    </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
