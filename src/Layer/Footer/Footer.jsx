import React from 'react'
import { Link } from 'react-router-dom'
import Insta from './assets/instagram'
import Tg from './assets/telegram'
import "./Footer.scss"

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container d-flex justify-content-between">
            <div className="col-3  d-flex flex-column">
                <h4>КОМПАНИЯ</h4>
                <Link to="/about">О нас</Link>
                <Link to="/contacts">Контакты</Link>
            </div>
            <div className="col-3 d-flex flex-column">
                <h4>ПОЛЕЗНОЕ</h4>
                <Link to="/howtopay">Оплата и доставка</Link>
                <Link to="/return">Условия возврата</Link>
                <Link>Бонусная система</Link>
            </div>
            <div className="col-3 d-flex flex-column">
                <h4>ПОКУПАТЕЛЮ</h4>
                <Link>Избранное</Link>
                <Link>Публичная оферта</Link>
                <Link>Политика конфиденциальности</Link>
            </div>
            <div className="col-3 d-flex flex-column">
                <h4>КОНТАКТЫ</h4>
                <div className="d-flex">
                    <Link><Insta/></Link>  ⠀
                    <Link><Tg/></Link>
                </div>
                <Link>+38(073) 096 36 44</Link>
                <Link>info@yanki.com</Link>
            </div>
        </div>
    </footer>
    <h5 className='rights'>©️ 2022 MrSaRDoR. All rights reserved</h5>
    </>
  )
}

export default Footer