// src/components/page-components/hero-banner/HeroBaner.js

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  box,
  box__content
} from './heroBanner.module.scss';

const imageMap = {
  'clifford.webp': (
    <StaticImage
      src="../../../images/clifford.webp"
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      placeholder="blurred"
      layout="constrained"
    />
  ),
  'hero-banner.webp': (
    <StaticImage
      src="../../../images/hero-banner.webp"
      alt="Hero Banner"
      placeholder="blurred"
      layout="constrained"
    />
  ), 
};

export const HeroBanner = ({ sourceImg = 'https://placehold.co/600x400', altText = 'Hero Banner', content = "Test Words" }) => {
  const localImage = imageMap[sourceImg];

  return (
    <figure className={box}>
      {sourceImg.startsWith('http') ? (
        <img src={sourceImg} alt={altText} />
      ) : (
        localImage || <p>Image not found</p>
      )}
      <figcaption className={box__content}>
        {content}
      </figcaption>
    </figure>
  );
};
