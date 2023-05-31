import React from "react";
import { Link } from "react-router-dom";
import To from "../../Assets/Navbar/link";
import Insta from "../../Layer/Footer/assets/instagram";
import Tg from "../../Layer/Footer/assets/telegram";
import Product from "../Catalog/Components/Product/Product";
import "./Favourite.scss";
import useRefreshToken from "../../hooks/useRefreshToken";

const Favourite = () => {
  const refresh = useRefreshToken()
  return (
    <div className="about Favourite">
      <div className="container">
        <div className="urls d-flex align-items-center">
          <Link to="/">Главная</Link> <To />{" "}
          <Link to="/favourite">Избранное</Link>
        </div>
        <h2>Избранное</h2>
        <div className="d-flex flex-wrap" style={{marginBottom:"100px"}}>
        <Product/>
        <Product/>
        </div>
          </div>
        </div>
  );
};

export default Favourite;
