import React from 'react'

const Footer = () => {
  return (
    <footer className='l-footer'>
        <div className='l-footer__head'>
            <div class="l-footer__head-column">
                <div className='b-contacts'>
                    <ul className='b-contacts__list'>
                        <li className='b-contacts__list-item m-instagram'>
                            <a href='https://www.instagram.com/' className='b-contacts__list-item_link'>@NameInstaAccount</a>
                        </li>
                        <li className='b-contacts__list-item m-phone'>
                            
                        </li>
                        <li className='b-contacts__list-item m-email'>
                            NameInst@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l-footer__head-column">
                <div className='b-contacts'>
                    <ul className='b-contacts__list'>
                        <li className='b-contacts__list-item m-offert'>
                            Договір оферти 
                        </li>
                        <li className='b-contacts__list-item m-offert'>
                            Договір оферти 
                        </li>
                        <li className='b-contacts__list-item m-offert'>
                            Політика конфіденційності
                        </li>
                    </ul>
                </div>
            </div>
            <div class="l-footer__head-column">
                <div className='b-contacts'>
                    <ul className='b-contacts__list'>
                        <li className='b-contacts__list-item m-offert'>
                            Виникли питання?
                        </li>

                        <li className='b-contacts__list-item m-offert'>
                        <a href="https://example.com" class="btn btn-small btn-primary">Зв'язатись з нами</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='l-footer__bottom'>
            <div className='b-copyright'>
                <span className='b-copyright__item'>© 2023 Всі права захищені.</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer;