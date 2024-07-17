import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetaData';

const Seo = ({ title }) => {
    const siteMetaData = useSiteMetadata();
    console.log(siteMetaData);
  return (
    <title>{title} | {siteMetaData.title}</title>
  )
}

export default Seo;
