import React from "react";
import { Link } from "react-router-dom";
import To from "../../Assets/Navbar/link";
import One from "./assets/one";
import Three from "./assets/three";
import Two from "./assets/two";
import "./HowToPay.scss";

const HowToPay = () => {
  return (
    <div className="howtopay">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/howtopay">Оплата и доставка</Link>
        </div>
        <h2>Оплата и доставка</h2>
        <div className="d-flex">
          <div className="col-6">
            <h5> Вы можете оплатить покупку одним из ниже перечисленных способов:</h5>
            <p>• наложенным платежом в отделении Новой Почты</p>
            <p>• денежным переводом  Visa/MasterCard</p>
            <p>• полная предоплата через Приват 24</p>
          </div>
          <div className="col-6">
            <h5> Мы готовы предложить несколько вариантов доставки: </h5>
            <p>• отправка по всей Украине в отделение Новой Почты(1-2 дня)</p>
            <p>• международные сервисы доставки для жителей зарубежья: Укрпочта( 1-3 недели ,DHL(3-7 дней)</p>
            <p>• Срок доставки: 1–2 дня с момента  заказа</p>
          </div>
        </div>
        <h2>Процесс оформления заказа с помощью LIQPAY:</h2>
        <div className="d-flex justify-content-between">
          <div className="d-flex col-3">
            <One/><p>Выбрать в корзине способ <br /> оплаты "LIQPAY";</p>
          </div>
          <div className="d-flex col-2">
            <Two/><p>Подтвердить заказ;</p>
          </div>
          <div className="d-flex col-6">
            <Three/><p style={{width:"490px"}}>После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас способ оплаты: через Приват24, или с помощью карты Mastercard/VISA со всего мира. </p>
          </div>
        </div>
          </div>
        </div>
  );
};

export default HowToPay;
