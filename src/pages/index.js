import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from 'gatsby';
import "bulma/css/bulma.css"

const IndexPage = (props) => (
    <Layout>
      <SEO title="Home" />
      <div className="MainContent">
        <div className="circleBlock  has-text-centered">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} className="spinAround circletag"/>
          <div className="title is-size-1  has-text-centered">
             Chad Wilson
          </div>
        </div>
        <div className="card has-text-centered">
            <div className="card-content">
              Systems Engineer, Software Developer, OSS Contributer, Cyber Security Enthusiaste
            </div>
        </div>
        <div className="card has-text-centered">
          <div className="title">
            Systems Engineering Explained
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