import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <form style={{paddingTop: '5rem'}} name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha="true"/>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default About