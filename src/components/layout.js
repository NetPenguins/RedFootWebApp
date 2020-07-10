import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "bulma/css/bulma.css"
import "../styles/main.css"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  //left in so you can use Title in your Layout 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
      <main className="MainContent">
        {/* <Header/> */}
        <Navbar/>
        <div
          className="MainContent"
        >
          <main >{children}</main>
        </div>
        <div className="section"/>
        <Footer/>
      </main>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
