//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/main.css"
import "bulma/css/bulma.css"
//Create a basic header that is reactive.
const Header = ({ siteTitle }) => {
  const [isActive, setisActive] = React.useState(false);
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
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* <a href="/"><img src="/icons/icon-72x72.png?v=b26f78d21142b47f8919030a5c0d04f5" height="50" width="50" alt="Chad Wilson Home" className="headerImage"></img></a> */}
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
          <div className="navbar-start ">
            <a className="Block__LinkButton" href="/">Home</a>
            <a className="Block__LinkButton" href="/About/">About</a>
            <a className="Block__LinkButton" href="/SightingsMap/">Sightings</a>
          </div>
        </div>
      </nav>
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
