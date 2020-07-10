import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Map from "../images/map.jpg"
import { graphql } from 'gatsby';
import "bulma/css/bulma.css"

const IndexPage = (props) => (
    <Layout>
      <SEO title="Home" />
      <div class="parallax"></div>
      <div id="tileSection">
          <div class="tile is-ancestor">
              <div class="tile is-4 is-vertical is-parent">
                  <a href="./About" class="tile is-child box">
                      <p class="title has-text-centered">Our Mission</p>
                  </a> 
                  <a href="./About" class="tile is-child box">
                      <p class="title has-text-centered">Predator Info</p>
                  </a> 
              </div>
              <div class="tile is-parent">
                  <a href="./SightingsMap" class="tile is-child box">
                      <h3 class="title has-text-centered">Recent Sightings</h3>
                      <img src={Map} alt="mapimage"/>
                  </a> 
              </div>
          </div>
      </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "headshot.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;