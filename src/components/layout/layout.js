import * as React from 'react';
import { Link } from 'gatsby';

import Header from '../header/header';
import useSiteMetadata from '../../hooks/useSiteMetaData';

import "../../styles/global.css";

const Layout = ({ pageTitle, children }) => {
  const data = useSiteMetadata();
  return (
    <div className='g-container'>
      <Header>
        <h1 className='hidden'>{data.title}</h1>
      </Header>
      <nav className='hidden'> 
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
      <div>
        <h1 className='hidden'>{pageTitle}</h1>
        {children}
      </div>
    </div>
  )
}

export default Layout;