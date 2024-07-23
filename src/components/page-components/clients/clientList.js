import React from 'react'

export const ClientList = () => {
  return (
    <div className="b-clients">
      <h2 className="b-clients__title">Для <span className='text-primary'>кого</span> цей курс?</h2>
      <ul className="b-clients__list">
        <li className="b-clients__list-item">
          для тих, хто хоче навчитися <span className='text-primary'>фотографувати та знімати відео</span> для себе та своєї сім’ї
        </li>
        <li className="b-clients__list-item">
          для тих, хто має <span className='text-primary'>бізнес</span> і потребує створювати для нього контент <span className='text-primary'>(кондитери, магазини, салони краси, виробництва тощо)</span>
        </li>
        <li className="b-clients__list-item">
          для <span className='text-primary'>експертів та блогерів</span>, які хочуть робити трендові фото та відео (маркетологи, психологи, коучі)
        </li>
        <li className="b-clients__list-item">
          для тих, хто хоче <span className='text-primary'>SМM-спеціалістів</span>, які хочуть підвищити свій рівень <span className='text-primary'>(SMM, UGC creator)</span>
        </li>
        <li className="b-clients__list-item">
          для тих, хто знаходиться <span className='text-primary'>за кордоном</span>
        </li>
      </ul>
      <a href="https://example.com" className="b-clients__btn btn btn-primary btn-full">KUPIT KURS</a>
    </div>
  )
}
