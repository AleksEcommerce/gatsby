import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage 
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/clifford.webp"
        />
        <Link to="/">Back to Home</Link>
      </Layout>  
    </>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage