import React from "react";
import { Link } from "react-router-dom";
import To from "../../Assets/Navbar/link";
import Fifth from "./assets/Fifth";
import Fourth from "./assets/fourth";
import One from "./assets/one";
import Sixth from "./assets/Sixth";
import Three from "./assets/three";
import Two from "./assets/two";
import "./Return.scss";

const Return = () => {
  return (
    <div className="return">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/return">Обмен и воврат</Link>
        </div>
        <h2>Оплата и доставка</h2>
            <h5>Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат <br /><br />
            Обмен и возврат возможен в случае :</h5>

        <div className="d-flex align-items-start">
          <div className="col-2 d-flex flex-column box">
          <One/> <p>если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)</p>
          </div>
          <div className="col-2 d-flex flex-column box">
            <Two/> <p>возврат и обмен осуществляется в течение двух дней с момента получения заказа</p>
          </div>
          <div className="col-2 d-flex flex-column box">
            <Three/> <p>возврат и обмен товара возможен только при отправке по Украине</p>
          </div>
          <div className="col-2 d-flex flex-column box">
            <Fourth/> <p>бланк возврата присутствует в каждой посылке </p>
          </div>
          <div className="col-2 d-flex flex-column box">
            <Fifth/> <p>все расходы по обмену и возврату товара несет покупатель</p>
          </div>
          <div className="col-2 d-flex flex-column box">
            <Sixth/> <p>после получения возврата мы делаем перевод денежных средств на карту клиента</p>
          </div>
        </div>
          </div>
        </div>
  );
};

export default Return;
