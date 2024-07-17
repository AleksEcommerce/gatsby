import * as React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css';
import Header from './header';
import useSiteMetadata from '../hooks/useSiteMetaData';


const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ pageTitle, children }) => {
  const data = useSiteMetadata();
  return (
    <main style={pageStyles} className={container}>
      <Header>
        <h1 className={siteTitle}>{data.title}</h1>
      </Header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </main>
  )
}

export default Layout