import * as React from 'react'
import useSiteMetadata from '../../hooks/useSiteMetaData';

const Seo = ({ title }) => {
    const siteMetaData = useSiteMetadata();
  return (
    <>
      <title>{title} | {siteMetaData.title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap" rel="stylesheet"></link>
    </>
  )
}

export default Seo;
