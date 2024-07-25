import React, { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useGetSlides from '../../../hooks/useGetSlides';
import { 
  thumbnail_gallery,
  thumbnail,
  lightbox,
  lightbox_content,
  main_image_container,
  main_image,
  thumbnail_wrapper
} from './lightgallery.module.scss';

const LightboxGallery = () => {
  const data = useGetSlides();
  
  const images = data?.allFile?.edges || [];

  const initialMainImage = images.length > 0 && images[0].node.childImageSharp
    ? getImage(images[0].node.childImageSharp.gatsbyImageData).images.fallback.src
    : images.length > 0
    ? images[0].node.publicURL
    : '';

  const [mainImage, setMainImage] = useState(initialMainImage);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (images.length > 0 && !mainImage) {
      setMainImage(
        images[0].node.childImageSharp
          ? getImage(images[0].node.childImageSharp.gatsbyImageData).images.fallback.src
          : images[0].node.publicURL
      );
    }
  }, [images, mainImage]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (images.length === 0) {
    return <div>No images found</div>;
  }

  return (
    <section className={thumbnail_wrapper}>
      <div className={main_image_container}>
        <img
          src={mainImage} 
          alt="Main"
          className={main_image}
          onClick={() => openLightbox(mainImage)}
        />
      </div>

      <div className={thumbnail_gallery}>
        {images.map((image, index) => (
          <div
            key={index}
            className={thumbnail}
            onClick={() => setMainImage(image.node.childImageSharp ? getImage(image.node.childImageSharp.gatsbyImageData).images.fallback.src : image.node.publicURL)}
          >
            {image.node.childImageSharp ? (
              <GatsbyImage
                image={getImage(image.node.childImageSharp.gatsbyImageData)}
                alt={`Thumbnail ${index + 1}`}
              />
            ) : (
              <img src={image.node.publicURL} alt={`Thumbnail ${index + 1}`} />
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={lightbox} onClick={closeLightbox}>
          <div className={lightbox_content}>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </section>
  );
};

export default LightboxGallery;
