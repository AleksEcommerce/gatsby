// src/components/page-components/hero-banner/HeroBaner.js

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const HeroBanner = () => {
  return (
    <figure className='b-hero_banner'>
      <StaticImage
        src="../../../images/hero-banner.webp"
        alt="Hero Banner"
        placeholder="blurred"
        layout="constrained"
        className='b-hero_banner--image'
      />
      <div className='b-hero_banner--date'>
        <span>START</span>
        <p>July 22</p>
      </div>
      <figcaption className='b-hero_banner--content'>
            <span className='b-hero_banner--content_head'>Преміальний КУРС</span>
            <div className='b-hero_banner--desc'>Е<b className='text-primary'>к</b>спертні <b className='text-primary'>Ф</b>ішки <span  className='b-hero_banner--desc_label'>100%</span></div>
            <Link to="#" className='btn btn-primary'>HOCHU KURS</Link>
      </figcaption>
    </figure>
  );
};
