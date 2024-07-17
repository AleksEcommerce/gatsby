import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <>
      <Layout pageTitle="About Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <img src='https://placehold.co/600x400' />
        <Link to="/">Back to Home</Link>
      </Layout> 
    </>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage