import React from 'react'

export const ClientList1 = () => {
  return (
    <div className="b-clients m-learning">
        <h2 className="b-clients__title">Чого я <span className='text-primary'>навчусь?</span></h2>
        <ul className="b-clients__list">
        <li className="b-clients__list-item">
            Які краще обрати  <span className='text-primary'>налаштування камери</span>  для якісних фото;
        </li>
        <li className="b-clients__list-item">
            Як за дві секунди робити <span className='text-primary'>трендові фото;</span>
        </li>
        <li className="b-clients__list-item">
            Як створювати стильні та <span className='text-primary'>актуальні колажі;</span>
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
