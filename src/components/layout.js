import * as React from 'react';
import { Link } from 'gatsby';

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout = ({ pageTitle, children }) => {
  return (
    <main style={pageStyles} className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">About</Link>
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