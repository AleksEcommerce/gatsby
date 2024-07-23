import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useGetImages from '../../../hooks/useGetImages';


export const HeroBaner = ({ sourceImg = 'https://placehold.co/600x400', altText = 'Hero Banner' }) => {

  const data = useGetImages();
  const imageNode = data.find(edge => edge.node.relativePath.includes(sourceImg));

  return (
    <figure>
      {sourceImg.startsWith('http') ? (
        <img src={sourceImg} alt={altText} />
      ) : (
        imageNode ? (
          <GatsbyImage image={getImage(imageNode.node.childImageSharp.gatsbyImageData)} alt={altText} />
        ) : (
          <p>Image not found</p>
        )
      )}
    </figure>
  );
};
