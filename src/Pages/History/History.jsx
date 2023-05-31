import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import To from "../../Assets/Navbar/link";



import "./History.scss";
import Item from "./components/items";
import Accardion from "./components/Accardion";






const History = () => {
  

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }

  return (
    <div className="about cabinet history">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/cabinet">Личный кабинет</Link>
        </div>
        <div className="nav-cb">
          <NavLink to="/history">История заказов</NavLink>
          <NavLink to="/cabinet">Личные данные</NavLink>
          <a href="/">Выйти</a>
        </div>
        


      <div className="accardion-history">
          <Accardion/>
          <Accardion/>
          <Accardion/>
          <Accardion/>
      
      </div>







          </div>
        </div>
  );
};

export default History;
