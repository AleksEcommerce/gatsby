import React from 'react'

export const RatesBanners = () => {
  return (
    <section className="b-rates">
        <h2 className="b-rates__title"><span className='text-primary'>Тарифи</span></h2>
        <h4 className="b-rates__subtitle">Старт 22 липня</h4>
    
        <div className="b-rates__list">
            <div className="b-rates__item">
                <h3 className="b-rates__item-title">Старт</h3>
                <div className="b-rates__mark">без зворотнього зв'язку</div>
                <ul className="b-rates__nav">
                <li className="b-rates__nav-item">Для тих, хто хоче</li>
                <li className="b-rates__nav-item">Для тих, хто хоче</li>
                <li className="b-rates__nav-item">Для тих, хто хоче</li>
                <li className="b-rates__nav-item m-feature">Для тих, хто хоче</li>
                <li className="b-rates__nav-item m-bonus">Для тих, хто хоче</li>
                </ul>
                <p className="b-rates__item-desc">Для тих, хто хоче навчитися фотографувати та знімати відео для себе та своєї сім’ї</p>
                <p className="b-rates__item-price">2500 грн</p>
                <a href="https://example.com" className="b-rates__item-btn btn btn-primary">KUPIT KURS</a>
                <a href="https://example.com" className="b-rates__item-btn btn btn-secondary">НАПИСАТИ МЕНЕДЖЕРУ</a>
            </div>
            <div className="b-rates__item">
                <h3 className="b-rates__item-title">Стандарт</h3>
                <p className="b-rates__item-desc">Для тих, хто має бізнес і потребує створювати для нього контент (кондитери, магазини, салони краси, виробництва тощо)</p>
                <p className="b-rates__item-price">3500 грн</p>
                <a href="https://example.com" className="b-rates__item-btn btn btn-primary">KUPIT KURS</a>
            </div>
            <div className="b-rates__item">
                <h3 className="b-rates__item-title">Преміум</h3>
                <p className="b-rates__item-desc">Для експертів та блогерів, які хочуть робити трендові фото та відео (маркетологи, психологи, коучі)</p>
                <p className="b-rates__item-price">4500 грн</p>
                <a href="https://example.com" className="b-rates__item-btn btn btn-primary">KUPIT KURS</a>
            </div>
        </div> 
    </section>
  )
}
