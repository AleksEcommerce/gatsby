import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

export const ClientsNumber = () => {
  return (
    <div className="b-banner">
        <div className="b-banner-head">
        <h2 className="b-banner--title">
            <span className='text-primary'>ХОЧЕШ</span> РОБИТИ<br /> ТРЕНДОВІ <span className='text-primary'>ФОТО</span>
        </h2>
        </div>
        <div className="b-banner-image">
        <StaticImage
            src="../../../images/image-1.webp"
            alt="Hero Banner"
            placeholder="blurred"
            layout="constrained"
            className='b-hero_banner--image'
        />
        </div> 
        
        <div className="b-banner-content">
        <p className="b-banner--title_1">Та <span className='text-primary'>відео</span></p>
        <p className="b-banner--title_2">Та відео</p>
        <p className="b-banner--title_3">258</p>
        <p className="b-banner--title_2 m-last">Учасниць успішно пройшли навчання</p>
        <a href="https://example.com" className="btn btn-primary">HOCHU KURS</a>
        </div>
    </div>
  )
}
