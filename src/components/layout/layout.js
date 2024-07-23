import * as React from 'react';
import { Link } from 'gatsby';

import Header from '../header/header';
import useSiteMetadata from '../../hooks/useSiteMetaData';

import "../../styles/global.css";

const Layout = ({ pageTitle, children }) => {
  const data = useSiteMetadata();
  return (
    <main className='container'>
      <Header>
        <h1>{data.title}</h1>
      </Header>
      <nav> 
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </main>
  )
}

export default Layout;