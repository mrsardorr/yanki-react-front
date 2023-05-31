import React, { useState } from "react";
import { Link } from "react-router-dom";
import To from "../../Assets/Navbar/link";
import "./Korzina.scss";

import Item from "./components/Item";


const Korzina = () => {

  const [data, setData] = useState({
    now: '',
    price:null
 });
  const getData = (now,price)=>{
    setData(now,price)
  }

  console.log(data)
  return (
    <div className="about korzina">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To /> <Link to="/korzina">Корзина</Link>
        </div>
        <h2>Ваш заказ</h2>
        <div className="d-flex flex-column items-list">
        <Item getData={getData} data={data}/>
        <Item getData={getData} data={data}/>
        <h1>К оплате: <b>{data.price} грн </b></h1>
        </div>
      </div>
    </div>
  );
};

export default Korzina;
